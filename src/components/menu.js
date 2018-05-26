import { h } from 'preact'
import * as helper from './helper'

export let Divider = (props) => <li class="divider" data-content={props.text} />

export let Item = (props) => <li class="menu-item">{props.children}</li>

export let BadgeItem = (props) => {
	return (
		<li class='menu-item'>
			<div class="menu-badge">
				<label class="label label-primary">{props.badgeText}</label>
			</div>
			{props.children}
		</li>
	)
}

export let Container = (props) => {
	return (
		<ul class="menu">
			{props.children}
		</ul>
	)
}