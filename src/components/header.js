import { h } from 'preact'

export let Section = (props) => {
	
	if (props.centered) return <section class="navbar-center">{props.children}</section>
	
	return <section class="navbar-section">{props.children}</section>
}

export let Container = (props) => (
	<header class="navbar">
		{props.children}
	</header>
)