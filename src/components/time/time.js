import { h, Component } from 'preact'
import * as Select from '../select'
import * as Grid from '../grid'
import * as Form from '../form'

export default class Time extends Component {
	
	render = ({ onChange }) => {
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
				minutes: this.state.minutes || 0,
				hours: this.state.hours || 0
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
							<Select.Select onChange={onTimeChange.bind(null, 'hours')}>
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
							<Select.Select onChange={onTimeChange.bind(null, 'minutes')}>
								{minuteOptions}
							</Select.Select>
						</Grid.Column>
					</Grid.Container>
				</Grid.Column>
			</Grid.Container>
		)
	}
}