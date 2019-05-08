const { createFilter } = require('rollup-pluginutils');
const phtml = require('phtml');

// rollup-plugin-my-example.js
module.exports = function rollupPluginPhtml (rawopts) {
	const options = Object(rawopts);

	const filter = createFilter(options.include, options.exclude);

	return {
		name: 'phtml', // this name will show up in warnings and errors

		transform (sourceHTML, id) {
			const isHtmlId = id.slice(-5) === '.html' && filter(id);

			if (!isHtmlId) {
				return;
			}

			// process the source using phtml
			return phtml.process(sourceHTML, {
				from: id
			}, options.plugins).then(
				result => {
					// configure dependencies
					result.messages.forEach(message => {
						if (message.type === 'dependency') {
							this.addWatchFile(message.file);
						}
					});

					const htmlString = JSON.stringify(result.html);
					const exportString = `export default ${htmlString}`;

					// handle injections
					if (options.inject) {
						const injectSelector = JSON.stringify(typeof options.inject === 'string' ? options.inject : 'body');

						const injectFunction = function (h,s) {
							if ("object" == typeof document) {
								var e = document.querySelector(s);

								if (e) {
									e.appendChild(document.createRange().createContextualFragment(h));
								}
							}
						};

						const injectionString = `(${String(injectFunction).replace(/\s+/g, ' ')})(${htmlString},${injectSelector})`;

						return `${injectionString};${exportString}`;
					}

					// configure response JavaScript
					return exportString;
				}
			);
		}
	};
}
