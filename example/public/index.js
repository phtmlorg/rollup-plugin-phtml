import includeHTML from './example-include.html';
import imageSize from './example-self_closing.html';
import selfClosing from './example-image_size.html';
import printSourceHTML from './example-print_source.html';

export default function render () {
	document.body.appendChild(
		document.createRange().createContextualFragment([
			includeHTML,
			imageSize,
			selfClosing,
			printSourceHTML
		].join('\n'))
	);
}
