import { h } from 'preact'

export let Header = (props) => (
	<div class="modal-header">
		<a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
		<div class="modal-title h5">{props.title}</div>
	</div>
)

export let Body = (props) => <div class="modal-body">{props.children}</div>

export let Footer = (props) => <div class="modal-footer">{props.children}</div>

export let Container = (props) => {

	window.onhashchange = () => {
		let hash = window.location.hash

		let classes = ['modal']

		if(hash === `#${props.id}`){
			classes.push('active')
		}

		document.getElementById(hash).className = classes.join(' ');
	}

	return (
		<div class="modal" id={props.id}>
			<a href={`#close`} class="modal-overlay" aria-label="Close"></a>
			<div class="modal-container">
				{props.children}
			</div>
		</div>
	)
}