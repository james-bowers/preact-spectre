import { h } from 'preact'

let getMonth = (month) => {
    return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ][month]
}

const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
}

const getLastDaysOfPreviousMonthHelper = (dates, num) => {
    return [...dates].slice(dates.length - num)
}

const getPreviousMonthDates = (month, year) => {
    // if january, then go back a month, and go back a year too
    month--
    if(month < 0){
        year--
        month = 11
    }
    return getMonthDates(month, year)
}

const getNextMonthDates = (month, year) => {
    // if after december, then go to january next year
    month++
    if (month > 11) {
        year++
        month = 0
    }
    return getMonthDates(month, year)
}

const getMonthDates = (month, year) => {
    let numberOfDays = daysInMonth(month, year)
    
    let dates = []
    
    for(var day=1; day <= numberOfDays; day++){
        dates.push(new Date(year, month, day))
    }
   
    return dates
}

const currentMonthDays = ({ month, year }) => {
    let dates = getMonthDates(month, year)
    return dates.map(date => {
        return (
            <Day type='current' date={date} />
        )
    })

}

// render the days that are in the next month
const nextMonthDays = ({ month, year }) => {
    let lastDayInMonth = new Date(year, month + 1, 0);
    let numberNextDays = 6 - lastDayInMonth.getDay();

    let allNextMonthDates = getNextMonthDates(month, year)

    let fewNextMonthDates = allNextMonthDates.slice(0, numberNextDays)

    return fewNextMonthDates.map(date => {
        return <Day type='next' date={date} />
    })
}

// render days the last few days of the previous month
const previousMonthDays = ({ month, year }) => {

    let currentMonthDates = getMonthDates(month, year)
    let previousMonthDates = getPreviousMonthDates(month, year)
    let previousMonthDaysToFill = currentMonthDates[0].getDay()

    let lastDates = getLastDaysOfPreviousMonthHelper(previousMonthDates, previousMonthDaysToFill)

    return lastDates.map(date => {
        return (
            <Day type='previous' date={date} />
        )
    })
}

const getTextFromTooltip = (date, tooltips) => {
    
    return tooltips
                .filter(tooltip => datesMatch(tooltip.date, date))
                .map(tooltip => tooltip.text)
                .join('. ') || ''
}

const datesMatch = (dateOne, dateTwo) => {
    return dateOne.getFullYear() === dateTwo.getFullYear() &&
        dateOne.getDate() === dateTwo.getDate() &&
        dateOne.getMonth() === dateTwo.getMonth()
}


let Day;

export default ({ month, year, onPreviousMonth, onNextMonth, onDatePicked, tooltips, selectedDate }) => {


    // here just to steal some scope
    Day = ({ date, type }) => {

        let typeStyle = 'current-month'
        let buttonStyle = ''

        if (type === 'previous') typeStyle = 'prev-month disabled'
        if (type === 'next') typeStyle = 'next-month disabled'


        let text = getTextFromTooltip(date, tooltips)

        let today = new Date()
        if (
            !text && datesMatch(today, date)
        ) {
            text = 'Today'
        }

        if (text) {
            typeStyle += ' tooltip';
            buttonStyle += ' badge'
        }

        if ( selectedDate && datesMatch(date, selectedDate)){
            buttonStyle += ' active'
        }

        let dateClicked = () => {
            if (onDatePicked) onDatePicked(date)
        }

        return (
            <div class={`calendar-date ${typeStyle}`} data-tooltip={text}>
                <button data-test-id='calendar-day' onClick={dateClicked} class={`date-item ${buttonStyle}`}>{date.getDate()}</button>
            </div>
        )

    }

    // main calendar

    let displayMonth = getMonth(month)

    return (
        <div class="calendar">
            <div class="calendar-nav navbar">
                <button data-test-id='calendar-previous-month' class="btn btn-action btn-link btn-lg" onClick={onPreviousMonth}>
                    <i class="icon icon-arrow-left"></i>
                </button>
                <div class="navbar-primary">{displayMonth} {year}</div>
                <button data-test-id='calendar-next-month' class="btn btn-action btn-link btn-lg" onClick={onNextMonth}>
                    <i class="icon icon-arrow-right"></i>
                </button>
            </div>
            <div class="calendar-container">
                <div class="calendar-header">
                    <div class="calendar-date">Sun</div>
                    <div class="calendar-date">Mon</div>
                    <div class="calendar-date">Tue</div>
                    <div class="calendar-date">Wed</div>
                    <div class="calendar-date">Thu</div>
                    <div class="calendar-date">Fri</div>
                    <div class="calendar-date">Sat</div>
                </div>
                <div class="calendar-body">
                    {previousMonthDays({ month, year, onDatePicked, tooltips })}
                    {currentMonthDays({ month, year, onDatePicked, tooltips})}
                    {nextMonthDays({ month, year, onDatePicked, tooltips})}
                </div>
            </div>
        </div>
    )
}