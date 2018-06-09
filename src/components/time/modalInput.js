import { h } from 'preact'
import TextInput from '../textInput'
import DateTimeInput from './input'
import * as Modal from '../modal'
import * as Button from '../button'

export default (props) => {
	let modalDatetimeInput = `datetime-input-${props.name}`

	return (
		<div>
			<a href={`#${modalDatetimeInput}`}>
				{props.children}
			</a>
			<TextInput disabled />
			<Modal.Container id={modalDatetimeInput}>
				<Modal.Header title="Select date and time" />
				<Modal.Body>
					<DateTimeInput {...props} />
				</Modal.Body>
				<Modal.Footer>
					<a href="#close">
						<Button.Button>Ok</Button.Button>
					</a>
				</Modal.Footer>
			</Modal.Container>
		</div>
	)
}
