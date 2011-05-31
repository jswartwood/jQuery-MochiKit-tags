# jQuery MochiKit tags

This plugin is a quick and dirty implementation of MochiKit's simple tag creation aliases.

---

## Detail

The **classchange** event fires whenever classes are changed with jQuery.  **Please note that if
classes are changed with standard Javascript or any other library; this event system will likely
fail to trigger.**  The **classchange** event will also fire with a namespace equivalent to the
class added/removed.  Data will also be passed to the event with properties for *action*
(add/remove) and *class*.

---

## Quick usage

	<div id="formContainer"></div>
	<form id="myForm">
		<input type="text" name="firstName" placeholder="First Name"/>
		<input type="text" name="lastName" placeholder="Last Name"/>
	</form>
	<script type="text/javascript">
		$("#formContainer").append(
			$.FORM(
				{"id": "myForm"},
				[
					$.INPUT({
						"type": "text",
						"name": "firstName",
						"placeholder": "First Name"
					}),
					$.INPUT({
						"type": "text",
						"name": "lastName",
						"placeholder": "Last Name"
					}),
					$.INPUT({
						"type": "submit",
						"value": "Submit"
					})
				]
			)
		);
	</script>
