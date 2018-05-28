import { h } from 'preact'

export let IconWrapper = (props) => (
	<div class="empty-icon">
		{props.children}
	</div>
)

export let Title = (props) => <p class="empty-title h5">{props.children}</p>

export let Subtitle = (props) => <p class="empty-subtitle">{props.children}</p>

export let Action = (props) => <div class="empty-action">{props.children}</div>

export let Container = (props) => (
	<div class="empty">
		{props.children}
	</div>
)