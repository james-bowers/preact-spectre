import { h } from 'preact'
import * as helper from './helper'

export let IconWrapper = (props) => (
	<div class="tile-icon">
		{props.children}
	</div>
)

export let Content = (props) => (
	<div class="tile-content">
		<div class="tile-title">{props.title}</div>
		<div class="tile-subtitle text-gray">{props.subtitle}</div>
	</div>
)

export let Action = (props) => (
	<div class="tile-action">
		{props.children}
	</div>
)

export let Container = (props) => {

	let classes = helper.buildClassList(props, ['tile'], {
		compact: 'tile-centered'
	})

	return (
		<div class={classes.join(' ')}>
			{props.children}
		</div>
	)
}