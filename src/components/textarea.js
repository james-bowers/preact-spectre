import { h } from 'preact'
import helper from './helper'
import * as Form from './form'

let TextArea = (props) => <textarea name={props.name} class="form-input" placeholder={props.placeholder}></textarea>