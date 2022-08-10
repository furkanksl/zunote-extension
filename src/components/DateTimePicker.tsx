import * as React from 'react';
import './DateTimePicker.scss';
import  Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import  { Moment } from 'moment';

type Props = {
  
};
export function DateTimePicker(props: Props) {
  function valid(current:Moment) {
    let date = new Date();
    return current.toDate() >= date;
  }

  return (
    <div className='datetime-picker-container'>
      <Datetime isValidDate={valid} dateFormat="YYYY-MMM-D"  initialValue={new Date()} inputProps={{readOnly:true}}/>
    </div>
  );
};
