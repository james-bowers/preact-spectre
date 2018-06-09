import { h, Component } from 'preact'
import * as Select from '../select'
import * as Grid from '../grid'
import * as Form from '../form'

export default class Time extends Component {

	constructor(props){
		super(props)
		this.state = {
			minutes: props.value ? props.value.getMinutes() : 0,
			hours:   props.value ? props.value.getHours()   : 0
		}
	}
	
	render = ({ onChange, value }) => {
		let minuteOptions = []
		let hourOptions = []

		for(let i=0; i<60; i=i+5){
			minuteOptions.push(<Select.Option>{i}</Select.Option>)
		}

		for(let i=0; i<24; i++){
			hourOptions.push(<Select.Option>{i}</Select.Option>)
		}

		let onTimeChange = (type, e) => {
			let value = e.target.value
			
			this.setState({ [type]: value })

			onChange({
				minutes: this.state.minutes,
				hours: this.state.hours
			})
		}

		return (
			<Grid.Container>
				<Grid.Column small="12" fallback="6">
					<Grid.Container>
						<Grid.Column small="12" fallback="4">
							<Form.Label>Hours</Form.Label>
						</Grid.Column>
						<Grid.Column small="12" fallback="8">
							<Select.Select value={value ? value.getHours() : 0} onChange={onTimeChange.bind(null, 'hours')}>
								{hourOptions}
							</Select.Select>
						</Grid.Column>
					</Grid.Container>
				</Grid.Column>
				<Grid.Column small="12" fallback="6">
					<Grid.Container>
						<Grid.Column small="12" fallback="4">
							<Form.Label>Minutes</Form.Label>
						</Grid.Column>
						<Grid.Column small="12" fallback="8">
							<Select.Select value={value ? value.getMinutes() : 0} onChange={onTimeChange.bind(null, 'minutes')}>
								{minuteOptions}
							</Select.Select>
						</Grid.Column>
					</Grid.Container>
				</Grid.Column>
			</Grid.Container>
		)
	}
}