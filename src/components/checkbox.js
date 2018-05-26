
import { h } from 'preact'

export let Checkbox = (props) => (
	<label class="form-checkbox">
		<input type="checkbox" name={props.name} />
		<i class="form-icon"></i> {props.label}
  </label>
)
