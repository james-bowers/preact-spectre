import { h, Component } from 'preact';
import View from './view'

export default class Calendar extends Component {

    constructor(props){
        super(props)

        let date = props.date || new Date()

        this.state = {
            selectedDate: undefined,
            month: date.getMonth(),
            year: date.getFullYear()
        }
    }
    
    onPreviousMonth = () => {
        let newMonth = this.state.month - 1
        let newYear = this.state.year

        if (newMonth < 0) {
            newMonth = 11
            newYear--
        }

        this.setState({ month: newMonth, year: newYear })
        this.forceUpdate()
    }
    
    onNextMonth = () => {
        console.log('onNextMonth')
        let newMonth = this.state.month + 1
        let newYear = this.state.year

        if (newMonth > 11) {
            newMonth = 0
            newYear++
        }

        this.setState({ month: newMonth, year: newYear })
        this.forceUpdate()
    }

    onDatePicked = (date) => {
        if (this.props.onDatePicked) this.props.onDatePicked(date)
        this.setState({ selectedDate: date })
        this.forceUpdate()
    }

    componentWillReceiveProps(nextProps){
        this.setState({ date: nextProps.date })
    }

    getTooltips = () => {
        let tooltips = [...this.props.tooltips || []]

        if(this.state.selectedDate){
            tooltips.push({
                date: this.state.selectedDate,
                text: 'Selected'
            })
        }

        return tooltips
    }

    render(){
        return (
            <View
                selectedDate={this.state.selectedDate}
                tooltips={this.getTooltips()}
                onDatePicked={this.onDatePicked}
                onNextMonth={this.onNextMonth} 
                onPreviousMonth={this.onPreviousMonth} 
                month={this.state.month} 
                year={this.state.year} />
        )
    }
}
