import { h } from 'preact'
import * as helper from './helper'

export let Wrapper = (props) => {

	let classes = helper.buildClassList(props, ['tooltip'], {
		right: 'tooltip-right',
		bottom: 'tooltip-bottom',
		left: 'tooltip-left',
		top: '' // top by default
	})

	return (
		<span class={classes.join(' ')} data-tooltip={props.text}>
			{props.children}
		</span>
	)
}