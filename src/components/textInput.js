import { h } from 'preact'

export let TextInput = (props) => <input class="form-input" type="text" placeholder={props.placeholder} value={props.value} />