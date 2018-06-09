import { h, Component } from 'preact'
import Time from './time'
import Calendar from './calendar'
import * as Modal from '../modal'

export default class DateTimeInput extends Component {

	constructor(props){
		super(props)

		this.state = {
			date: props.date || new Date()	 
		}
	}

	onTimeChange = ({ hours, minutes }) => {
		// manipulate date using hours and minutes
		let newDate = this.state.date
		newDate.setMinutes(minutes)
		newDate.setHours(hours)

		this.setState({ date: newDate })
		this.forceUpdate()
	}

	onDateChange = (date) => {
		// only use date for month and day.
		let newDate = this.state.date
		newDate.setMonth(date.getMonth())
		newDate.setYear(date.getYear())
		newDate.setDate(date.getDate())

		this.setState({ date: newDate })
		this.forceUpdate()
	}

	render = (props) => {
		return (
			<div>
				<Time value={this.state.date} onChange={this.onTimeChange} />
				<Calendar value={this.state.date} onDatePicked={this.onDateChange} />
				<input type='hidden' name={props.name} value={this.state.date.toISOString()} />
			</div>
		)
	}
}