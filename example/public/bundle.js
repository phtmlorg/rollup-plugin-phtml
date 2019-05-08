var bundle = (function () {
	var includeHTML = "<section>\n\t<h2>Include</h2>\n\t<p>pHTML Include is loading.</p>\n\t<script>\n(function (script) {\n\tvar includeElements = script.parentNode.querySelectorAll('include');\n\tvar text = script.parentNode.children[1];\n\n\tdocument.addEventListener('DOMContentLoaded', function () {\n\t\ttext.textContent = includeElements.length === 0\n\t\t\t? 'pHTML Include is working.'\n\t\t: 'pHTML Include is not working.'\n\t});\n})(document.currentScript);\n</script>\n\n</section>\n";

	var imageSize = "<section class=\"self_closing\">\n\t<h2>Self-Closing</h2>\n\t<p>pHTML Self-Closing is loading.</p>\n\t<div><div class=\"main\"></div></div>\n\t<template><slot name=\"title\"></slot></template>\n\t<custom-element></custom-element>\n\t<script>\n\t(function (script) {\n\t\tvar customElement = script.previousElementSibling;\n\t\tvar text = script.parentNode.children[1];\n\n\t\tdocument.addEventListener('DOMContentLoaded', function () {\n\t\t\ttext.textContent = customElement.nodeName === 'CUSTOM-ELEMENT'\n\t\t\t\t? 'pHTML Self-Closing is working.'\n\t\t\t: 'pHTML Self-Closing is not working.'\n\t\t});\n\t})(document.currentScript);\n\t</script>\n</section>\n";

	var selfClosing = "<section class=\"image_size\">\n\t<h2>Image Size</h2>\n\t<p>pHTML Image Size is loading.</p>\n\t<img src=\"image-600x400.jpg\" width=\"600\" height=\"400\" intrinsicsize=\"600x400\" />\n\t<script>\n\t(function (script) {\n\t\tvar image = script.previousElementSibling;\n\t\tvar text = script.parentNode.children[1];\n\n\t\tdocument.addEventListener('DOMContentLoaded', function () {\n\t\t\ttext.textContent = image.hasAttribute('intrinsicsize')\n\t\t\t\t? 'pHTML Image Size is working.'\n\t\t\t: 'pHTML Image Size is not working.'\n\t\t});\n\t})(document.currentScript);\n\t</script>\n</section>\n";

	var printSourceHTML = "<h2>Source Code</h2>\n<pre><script>(function (script) {\n\tdocument.addEventListener('DOMContentLoaded', function () {\n\t\tscript.parentNode.textContent = document.documentElement.outerHTML;\n\t});\n})(document.currentScript)</script></pre>\n";

	function render () {
		document.body.appendChild(
			document.createRange().createContextualFragment([
				includeHTML,
				imageSize,
				selfClosing,
				printSourceHTML
			].join('\n'))
		);
	}

	return render;

}());
