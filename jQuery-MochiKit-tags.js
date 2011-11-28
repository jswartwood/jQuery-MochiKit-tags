/*!
 * jQuery MochiKit tags v1.5 | git.io/Bmwneg
 * jacob.swartwood.info/license/
 */
/*
 * A jQuery adaptation of MochiKit's DOM creation shortcuts
 * https://github.com/jswartwood/jQuery-MochiKit-tags
 *
 * Copyright (c) 2011 Jacob Swartwood
 * Licensed under the MIT license
 *
 * Contributors:
 * Herbert Vojčík - https://github.com/herby/jQuery-MochiKit-tags
 */

(function ( $ ) {
	var tagMap = {},
		slashRE = /\/$/;

	$.mochiTags = function( tags ) {
		if (tags) {
			tags = [].concat(tags);

			var tag, closing;
			for ( var i = 0, j = tags.length; i < j; i++) {
				tag = tags[i].replace(slashRE, "").toUpperCase();
				if (!tagMap[tag]) {
					tagMap[tag] = {
						closing: slashRE.test(tags[i]),
						tagName: tag.toLowerCase()
					};
					$[tag] = tagFunctionFactory("<" + tagMap[tag].tagName + (tagMap[tag].closing ? "></" + tagMap[tag].tagName : "/") + ">");
				}
			}
		}

		return tagMap;
	};

	function tagFunctionFactory( tagTemplate ) {
		return function( /* [attrs], children... */ ) {
			var tag = $(tagTemplate),
				children = Array.prototype.concat.apply([], arguments);

			if ($.isPlainObject(children[0])) {
				tag.attr(children.shift());
			}
			
			for ( var g = 0, h = children.length; g < h; g++) {
				tag.append(children[g]);
			}
			
			return tag;
		};
	}

	$.mochiTags([
		"A",
		"ABBR",
		"ADDRESS",
		"ARTICLE",
		"ASIDE",
		"AUDIO",
		"B",
		"BDI",
		"BDO",
		"BLOCKQUOTE",
		"BR/",
		"BUTTON/",
		"CANVAS",
		"CAPTION",
		"CITE",
		"CODE",
		"COL",
		"COLGROUP",
		"COMMAND",
		"DATALIST",
		"DD",
		"DEL",
		"DETAILS",
		"DIV",
		"DL",
		"DT",
		"EM",
		"EMBED",
		"FIELDSET",
		"FIGCAPTION",
		"FIGURE",
		"FOOTER",
		"FORM",
		"H1",
		"H2",
		"H3",
		"H4",
		"H5",
		"H6",
		"HEADER",
		"HGROUP",
		"HR/",
		"I",
		"IFRAME",
		"IMG/",
		"INPUT/",
		"INS",
		"KEYGEN/",
		"LABEL",
		"LEGEND",
		"LI",
		"LINK/",
		"MARK",
		"MENU",
		"METER",
		"NAV",
		"OBJECT",
		"OL",
		"OPTGROUP",
		"OPTION",
		"OUTPUT/",
		"P",
		"PARAM",
		"PRE",
		"PROGRESS",
		"Q",
		"RP",
		"RT",
		"RUBY",
		"S",
		"SCRIPT",
		"SECTION",
		"SELECT",
		"SOURCE",
		"SPAN",
		"STRONG",
		"STYLE",
		"SUB",
		"SUP",
		"TABLE",
		"TBODY",
		"TD",
		"TEXTAREA",
		"TFOOT",
		"TH",
		"THEAD",
		"TIME",
		"TR",
		"TRACK",
		"TT",
		"UL",
		"VIDEO",
		"WBR/"
	]);

})(jQuery);