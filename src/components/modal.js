import { h } from 'preact'
import * as helper from './helper'

export let Header = (props) => (
	<div class="modal-header">
		<a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
		<div class="modal-title h5">{props.title}</div>
	</div>
)

export let Body = (props) => <div class="modal-body">{props.children}</div>

export let Footer = (props) => <div class="modal-footer">{props.children}</div>

export let Container = (props) => {

	let classes = helper.buildClassList(props, ['modal'], {
		small: 'modal-sm',
		large: 'modal-lg'
	})

	let checkOpenModalHash = () => {
		let hash = window.location.hash

		let newClasses = [...classes]

		if(hash === `#${props.id}`){
			newClasses.push('active')
		}

		let modal = document.getElementById(hash)
		if(modal){
			modal.className = newClasses.join(' ');
		}
	}

	window.onhashchange = checkOpenModalHash

	// also call to see if the page has 
	// loaded with a hash value to open the modal
	checkOpenModalHash()

	return (
		<div class={classes.join(' ')} id={props.id}>
			<a href={`#close`} class="modal-overlay" aria-label="Close"></a>
			<div class="modal-container">
				{props.children}
			</div>
		</div>
	)
}