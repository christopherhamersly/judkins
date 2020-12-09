import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
import Calendar from 'react-calendar'
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)

// this weird syntax is just a shorthand way of specifying loaders
require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css')

function Calender() {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={[]}
      />
    )
  }

  export default Calendar;