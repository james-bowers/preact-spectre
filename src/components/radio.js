import { h } from 'preact'

export let Radio = (props) => (
	<label class="form-radio">
		<input type="radio" name={props.name} checked={props.value} />
		<i class="form-icon"></i> {props.label}
	</label>
)