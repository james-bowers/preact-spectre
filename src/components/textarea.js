import { h } from 'preact'
import * as helper from './helper'
import * as Form from './form'

export let TextArea = (props) => <textarea name={props.name} class="form-input" placeholder={props.placeholder}></textarea>