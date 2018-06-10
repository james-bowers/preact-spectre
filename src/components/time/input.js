import { h, Component } from 'preact'
import Time from './time'
import Calendar from './calendar'
import * as Modal from '../modal'

export default class DateTimeInput extends Component {

	constructor(props){
		super(props)

		this.state = {
			date: props.value	 
		}
	}

	onTimeChange = ({ hours, minutes }) => {
		// manipulate date using hours and minutes
		let newDate = this.state.date || new Date()
		newDate.setMinutes(minutes)
		newDate.setHours(hours)

		this.setState({ date: newDate })
		this.forceUpdate()
	}

	onDateChange = (date) => {
		// only use date for month and day.
		let newDate = this.state.date || new Date()
		newDate.setMonth(date.getMonth())
		newDate.setFullYear(date.getFullYear())
		newDate.setDate(date.getDate())

		this.setState({ date: newDate })
		this.forceUpdate()
	}

	render = (props) => {
		let ISOStringValue = this.state.date ? this.state.date.toISOString() : ''

		return (
			<div>
				<Time date={this.state.date} onChange={this.onTimeChange} />
				<Calendar date={this.state.date} onDatePicked={this.onDateChange} />
				<input type='hidden' name={props.name} value={ISOStringValue} />
			</div>
		)
	}
}