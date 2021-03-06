import { h } from 'preact'
import * as helper from './helper'
import { Button } from './button'
import * as Grid from './grid'

export let Horizontal = (props) => (
	<Grid.Container>
		<Grid.Column small="12" fallback="3">
			{props.renderLabel()}
		</Grid.Column>
		<Grid.Column small="12" fallback="9">
			{props.renderInput()}
		</Grid.Column>
	</Grid.Container>
)

export let Group = (props) => {
	return (
		<div class="form-group">
			{props.children}
			{props.hint && <p class="form-input-hint">{props.hint}</p>}
		</div>
	)
}

export let Label = (props) => <label class="form-label">{props.children}</label>

export let getFormValues = (formId) => {
	let formElements = document.querySelectorAll(`#${formId} [name]`)

	let values = {}
	formElements.forEach(inputNode => {
		let formId = inputNode.getAttribute('name')

		switch (inputNode.getAttribute('type')) {
			case 'checkbox':
				values[formId] = inputNode.checked
				break;
			default:
				values[formId] = inputNode.value
		}
	})

	return values
}

export let Container = (props) => {

	let onSubmit = () => {
		let values = getFormValues(props.id)
		props.onSubmit(values)
	}

	return (
		<div id={props.id}>
			<div>
				{props.children}
			</div>
			{props.submitTxt && <Button class='centered' onClick={onSubmit}>{props.submitTxt}</Button>}
		</div>
	)
}
