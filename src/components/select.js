import { h } from 'preact'
import * as helper from './helper'

export let Option = (props) => <option value={props.value}>{props.children}</option>

export let Select = (props) => <select name={props.name} value={props.value} onChange={props.onChange} class="form-select">{props.children}</select>