import { h } from 'preact'

export let Toast = (props) => {

	let classes = helper.buildClassList(props, ['toast'], {
		primary: 'toast-primary',
		warning: 'toast-warning',
		error: 'toast-error',
		success: 'toast-success',
	})

	return (
		<div class={classes.join(' ')}>
			<button class="btn btn-clear float-right"></button>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		</div>
	)
}