import { h } from 'preact'
import * as helper from './helper'

let Option = (props) => <option value={props.value}>{props.children}</option>

let Select = (props) => <select class="form-select">{props.children}</select>