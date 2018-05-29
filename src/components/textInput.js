import { h } from 'preact'

export let TextInput = (props) => <input name={props.name} class="form-input" type="text" placeholder={props.placeholder} value={props.value} />