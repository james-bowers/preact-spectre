import { h } from 'preact'

export let Switch = (props) => (
	<label class="form-switch">
		<input type="checkbox" name={props.name} checked={props.value} />
		<i class="form-icon"></i> {props.label}
  	</label>
)