import { h } from 'preact'
import * as helper from './helper'

export let Group = (props) => {
	return (
		<div class="btn-group btn-group-block">
			{props.children}
		</div>
	)
}

export let Button = (props) => {

	let classes = helper.buildClassList(props, ['btn'], {
		primary: 'btn-primary',
		link: 'btn-link',
		success: 'btn-success',
		error: 'btn-error',
		square: 'btn-action',
		circle: 'btn-action circle',
		disabled: 'disabled',
		loading: 'loading',
		small: 'btn-sm',
		large: 'btn-lg',
		full: 'btn-block'
	})

	return <button onClick={props.onClick} class={classes.join(' ')}>{props.children}</button>	
}