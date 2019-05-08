import phtml from '..';
import phtmlImageSize from '@phtml/image-size';
import phtmlInclude from '@phtml/include';
import phtmlSelfClosing from '@phtml/self-closing';

export default {
	input: 'public/index.inject.js',
	output: [{
		file: 'public/bundle.inject.js',
		format: 'iife',
		name: 'render',
		strict: false
	}],
	plugins: [
		phtml({
			plugins: [
				phtmlImageSize,
				phtmlInclude,
				phtmlSelfClosing
			],
			inject: 'main'
		})
	]
};
