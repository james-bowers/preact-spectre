import { h } from 'preact'

export let TextInput = (props) => <input oninput={props.onInput} name={props.name} class="form-input" type="text" placeholder={props.placeholder} value={props.value} />