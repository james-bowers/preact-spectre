import { h } from 'preact'
import helper from './helper'

export let ImageContainer = (props) => <div class="card-image"> {props.children} </div>

export let Header = (props) =>  (
	<div class="card-header">
		{props.title && <div class="card-title h5">{props.title}</div>}
		{props.subtitle && <div class="card-subtitle text-gray">{props.subtitle}</div>}
	</div>
)

export let Body = (props) => (
	<div class="card-body">
		{props.children}
	</div>
)

export let Footer = (props) => (
	<div class="card-footer">
		{props.children}
	</div>
)

export let Container = (props) => {
	return (
		<div class="card">
			{props.children}
		</div>
	)
}