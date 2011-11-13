/*
 * jQuery MochiKit tags
 * https://github.com/{jswartwood,herby}/jQuery-MochiKit-tags
 *
 * Copyright (c) 2011 Jacob Swartwood
 * Copyright (c) 2011 Herbert Vojčík
 * Licensed under the MIT license
 */

(function ($) {
	var slashRE = /\/$/;
	slashRE.compile();

	$.mochiTags = function (tags) {
		for ( var i = 0, j = tags.length; i < j; i++) {
			var tag = tags[i], closing = slashRE.test(tag), tagName = tag
					.replace(slashRE, '').toLowerCase();
			$[tagName.toUpperCase()] = tagFunctionFactory("<" + tagName
					+ (closing ? ("></" + tagName) : "/") + ">");
		}
	};

	function tagFunctionFactory (tagTemplate) {
		return function (/* [attrs], children... */) {
			var tag = $(tagTemplate), children = arguments;

			if ($.isPlainObject(arguments[0])) {
				tag.attr(arguments[0]);
				children = [].slice.call(arguments, 1);
			}

			(function recursiveAppend (arrayOrElement) {
				if (!arrayOrElement) { return; }
				if ('object' === typeof arrayOrElement
						&& 'number' === typeof arrayOrElement.length) {
					for ( var g = 0, h = arrayOrElement.length; g < h; g++) {
						recursiveAppend(arrayOrElement[g]);
					}
				}
				else {
					tag.append(arrayOrElement);
				}
			})(children);

			return tag;
		};
	}

	$.mochiTags([ "A", "ARTICLE", "ASIDE", "BR/", "BUTTON/", "CANVAS",
			"CAPTION", "DD", "DIV", "DL", "DT", "FIELDSET", "FIGURE",
			"FIGCAPTION", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6",
			"HEADER", "HGROUP", "HR/", "IFRAME", "IMG/", "INPUT/", "LABEL",
			"LEGEND", "LI", "LINK/", "MARK", "METER", "NAV", "OL", "OPTGROUP",
			"OPTION", "P", "PRE", "PROGRESS", "SCRIPT", "SECTION", "SELECT",
			"SPAN", "STRONG", "STYLE", "TABLE", "TBODY", "TD", "TEXTAREA",
			"TFOOT", "TH", "THEAD", "TR", "TT", "UL" ]);

})(jQuery);