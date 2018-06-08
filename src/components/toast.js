import { h, render } from 'preact'
import * as helper from './helper'

export let Wrapper = (props) => <div id='toast-wrapper'>{props.children}</div>

export let showToast = (props) => {
	render(<Toast {...props} />, document.getElementById('toast-wrapper'))
}

export let Toast = (props) => {

	let classes = helper.buildClassList(props, ['toast'], {
		primary: 'toast-primary',
		warning: 'toast-warning',
		error: 'toast-error',
		success: 'toast-success',
	})

	let id = Math.floor(Math.random() * Math.floor(1000000));

	let removeToast = () => {
		let toast = document.getElementById(id)
		if(toast) toast.remove()
	}

	// default to remove after 15 seconds
	setTimeout(removeToast, props.timeout || 15000);

	return (
		<div id={id} class={classes.join(' ')}>
			<button onClick={removeToast} class="btn btn-clear float-right"></button>
			{props.children}
		</div>
	)
}