/*
 * jQuery MochiKit tags
 * https://github.com/jswartwood/jQuery-MochiKit-tags
 *
 * Copyright (c) 2011 Jacob Swartwood
 * Licensed under the MIT license
 * http://jacob.swartwood.info/license/
 *
 * enjoy.
 */

(function( $ ) {
	var domTags = [
		{"name": "A", "closing": false },
		{"name": "ARTICLE", "closing": false },
		{"name": "ASIDE", "closing": false },
		{"name": "BR", "closing": true },
		{"name": "BUTTON", "closing": true },
		{"name": "CANVAS", "closing": false },
		{"name": "CAPTION", "closing": false },
		{"name": "DD", "closing": false },
		{"name": "DIV", "closing": false },
		{"name": "DL", "closing": false },
		{"name": "DT", "closing": false },
		{"name": "FIELDSET", "closing": false },
		{"name": "FIGURE", "closing": false },
		{"name": "FIGCAPTION", "closing": false },
		{"name": "FOOTER", "closing": false },
		{"name": "FORM", "closing": false },
		{"name": "H1", "closing": false },
		{"name": "H2", "closing": false },
		{"name": "H3", "closing": false },
		{"name": "H4", "closing": false },
		{"name": "H5", "closing": false },
		{"name": "H6", "closing": false },
		{"name": "HEADER", "closing": false },
		{"name": "HGROUP", "closing": false },
		{"name": "HR", "closing": true },
		{"name": "IFRAME", "closing": false },
		{"name": "IMG", "closing": true },
		{"name": "INPUT", "closing": true },
		{"name": "LABEL", "closing": false },
		{"name": "LEGEND", "closing": false },
		{"name": "LI", "closing": false },
		{"name": "LINK", "closing": true },
		{"name": "MARK", "closing": false },
		{"name": "METER", "closing": false },
		{"name": "NAV", "closing": false },
		{"name": "OL", "closing": false },
		{"name": "OPTGROUP", "closing": false },
		{"name": "OPTION", "closing": false },
		{"name": "P", "closing": false },
		{"name": "PRE", "closing": false },
		{"name": "PROGRESS", "closing": false },
		{"name": "SCRIPT", "closing": false },
		{"name": "SECTION", "closing": false },
		{"name": "SELECT", "closing": false },
		{"name": "SPAN", "closing": false },
		{"name": "STRONG", "closing": false },
		{"name": "STYLE", "closing": false },
		{"name": "TABLE", "closing": false },
		{"name": "TBODY", "closing": false },
		{"name": "TD", "closing": false },
		{"name": "TEXTAREA", "closing": false },
		{"name": "TFOOT", "closing": false },
		{"name": "TH", "closing": false },
		{"name": "THEAD", "closing": false },
		{"name": "TR", "closing": false },
		{"name": "TT", "closing": false },
		{"name": "UL", "closing": false }
	];

	for (var i = 0, j = domTags.length; i < j; i++) {
		$[domTags[i].name.toUpperCase()] = (function( tDefinition ) {
			var tagName = tDefinition.name.toLowerCase(),
				closing = tDefinition.closing;

			return function( attrs, childs ) {
				var tag = $("<" + tagName + (closing ? ("></" + tagName + ">") : "/>"));

				if (jQuery.isPlainObject(attrs)) {
					tag.attr(attrs);
				} else if (!!attrs) {
					childs = attrs;
				}

				if (childs instanceof Array) {
					// $.SELECT({ ... }, [ $.OPTION( ... ), $.OPTION( ... ) ])

					for (var g = 0, h = childs.length; g < h; g++) {
						tag.append(childs[g]);
					}
				} else {
					// $.OPTION( {value : 'foo' }, 'A label' )

					tag.append(childs);
				}

				return tag;
			};
		})(domTags[i]);
	}

})(jQuery);