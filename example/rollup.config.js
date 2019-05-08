import phtml from '..';
import phtmlImageSize from '@phtml/image-size';
import phtmlInclude from '@phtml/include';
import phtmlSelfClosing from '@phtml/self-closing';

export default {
	input: 'public/index.js',
	output: [{
		file: 'public/bundle.js',
		format: 'iife',
		name: 'bundle',
		strict: false
	}],
	plugins: [
		phtml({
			plugins: [
				phtmlImageSize,
				phtmlInclude,
				phtmlSelfClosing
			]
		})
	]
};
