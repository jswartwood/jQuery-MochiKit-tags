(function() {
	
	module("$.mochiTags");
	
	test("returns list of tags", function() {
		var tagList = $.mochiTags();
		
		ok(tagList, "Returns an object");
		
		ok(tagList.DIV, "Contains DIV tag in the list");
		equals(typeof $.DIV, "function", "$.DIV is a function");

		ok(tagList.IMG, "Contains IMG tag in the list");
		equals(typeof $.IMG, "function", "$.IMG is a function");
	});

	test("list of tags has the appropriate api", function() {
		var tagList = $.mochiTags();

		equals(tagList.P.tagName, "p", "P tag has `.tagName` of 'p'");
		equals(tagList.P.closing, false, "P tag is not self closing");

		equals(tagList.INPUT.tagName, "input", "INPUT tag has `.tagName` of 'input'");
		equals(tagList.INPUT.closing, true, "INPUT is self closing");
	});

	test("can be used to add new/custom tags", function() {
		var tagList;

		tagList = $.mochiTags("DIVVY");
		ok(tagList.DIVVY, "Create a DIVVY tag");
		equals(typeof $.DIVVY, "function", "$.DIVVY is a function");

		tagList = $.mochiTags("OPTIMUSPRIME");
		ok(tagList.OPTIMUSPRIME, "Create a OPTIMUSPRIME tag");
		equals(typeof $.OPTIMUSPRIME, "function", "$.OPTIMUSPRIME is a function");
	});

	module("Tag methods");

	test("generate an element (jQuery node)", function() {
		var el, node,
			hasLowerCaseSpan = /\<span\>/;

		ok(el = $.DIV(), "Create an element");
		ok(node = el.get(0), "Has DOM node");
		equal(node.tagName.toLowerCase(), "div", "Is the correct tag");

		ok($.SPAN().appendTo(el), "Create an element");
		ok(hasLowerCaseSpan.test(node.innerHTML), "TagName is lowercase");
	});
	
	test("generate element with attributes", function() {
		var el,
			attrs = {
				"class": "test",
				"type": "hidden",
				"value": "hello"
			};

		ok(el = $.INPUT(attrs), "Create an input");
		equals(el.attr("type"), "hidden", "The input has type 'hidden'");
		equals(el.val(), "hello", "The input has value 'hello'");
		ok(el.hasClass("test"), "The input has class 'test'");
	});

	test("generate element with text", function() {
		var el;

		ok(el = $.SPAN("Hello World!"), "Create a SPAN with 'Hello World!' in it");
		equals(el.text(), "Hello World!", "Inner text is correct");
	});

	test("generate element with children", function() {
		var el;

		ok(el = $.SPAN($.SPAN(), $.SPAN(), $.SPAN()), "Create a SPAN with SPANs inside");
		equals(el.find("span").length, 3, "There are three SPAN tag children");

		ok(el = $.SPAN($.SPAN(), $.SPAN(), "Hello ",  $.SPAN(), "World!"), "Create a SPAN with SPANs inside and 'Hello World!' text");
		equals(el.find("span").length, 3, "There are three SPAN tag children");
		equals(el.text(), "Hello World!", "The inner text is 'Hello World!'");
	});

	test("generate element with attributes and children", function() {
		var el,
			attrs = {
				"class": "myClass",
				"title": "this element was generated",
				"style": "width: 45px"
			};

		ok(el = $.DIV(attrs, $.P(), $.P()), "Create a div with P tags inside");
		equals(el.attr("title"), "this element was generated", "The title attribute is correct");
		equals(el.width(), 45, "The style attribute was set correctly");
		ok(el.hasClass("myClass"), "The class 'myClass' is applied");
		equals(el.find("p").length, 2, "There are two P tag children appended");
	});

	test("can have children defined via array or arguments or both", function() {
		var el;

		ok(el = $.DIV($.P(), $.P(), $.P()), "Create a div with P tags inside (args)");
		equals(el.find("p").length, 3, "There are three P tag children appended");

		ok(el = $.DIV([ $.P(), $.P(), $.P() ]), "Create a div with P tags inside (array)");
		equals(el.find("p").length, 3, "There are three P tag children appended");

		ok(el = $.DIV($.P(), [ $.P(), $.P() ]), "Create a div with P tags inside (arg + array)");
		equals(el.find("p").length, 3, "There are three P tag children appended");
	});

	test("Completionist", function() {
		var el,
			tagList = $.mochiTags();

		for (var tag in tagList) {
			ok(el = $[tag](), "Create a " + tag + " tag");
			equals(el.get(0).tagName.toUpperCase(), tag, "Is the correct tag");
		}
	});

})();
