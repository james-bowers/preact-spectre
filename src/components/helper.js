export let buildClassList = (props, fixed, mappings) => {

	let classes = [...fixed]

	Object.keys(mappings).forEach(propKey => {

		if (props[propKey]){
			classes.push(mappings[propKey]);
		}
		
	})

	return classes
}