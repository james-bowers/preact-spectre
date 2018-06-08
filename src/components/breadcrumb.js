import { h } from 'preact'

export let Item = (props) => (
	<li class="breadcrumb-item">
    	{props.children}
  	</li>
)

export let Container = (props) => <ul class="breadcrumb">{props.children}</ul>