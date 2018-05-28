export let buildClassList = (props, fixed, mappings) => {

	let classes = [...fixed]

	if(props.class) classes.push(props.class)

	Object.keys(mappings).forEach(propKey => {

		if (props[propKey]){
			classes.push(mappings[propKey]);
		}
		
	})

	return classes
}