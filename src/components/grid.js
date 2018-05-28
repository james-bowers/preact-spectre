import { h } from 'preact';
import * as helper from './helper'

export let Column = (props) => {

	let classes = helper.buildClassList(props, ['column p-1'], {
		small: `col-sm-${props.small}`, // 1-12
		medium: `col-md-${props.medium}`, // 1-12
		large: `col-lg-${props.large}`, // 1-12
		xLarge: `col-xl-${props.xLarge}`, // 1-12
		fallback: `col-${props.fallback}` // 1-12
	})

	return (
		<div class={classes.join(' ')}>{props.children}</div>
	)
}

export let Container = (props) => {

	let classes = helper.buildClassList(props, ['container'], {
		'max-width-xl': 'grid-xl', // 1280px
		'max-width-lg': 'grid-lg', // 960px
		'max-width-md': 'grid-md', // 840px
		'max-width-sm': 'grid-sm', // 600px
		'max-width-xs': 'grid-xs' // 480px
	})

	return (
		<div class={classes.join(' ')}>
			<div class="columns">
				{props.children}
  			</div>
		</div>
	)
}