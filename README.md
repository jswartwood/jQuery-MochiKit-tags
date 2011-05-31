# jQuery MochiKit tags

This plugin is a quick and dirty implementation of MochiKit's simple tag creation aliases.

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
