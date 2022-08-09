import * as React from 'react';
import './DateTimePicker.scss';
import 'rmc-picker/assets/index.css';
import 'rmc-date-picker/assets/index.css';

import DatePicker from 'rmc-date-picker/lib/DatePicker';
import enUs from 'rmc-date-picker/lib/locale/en_US';

export const minDate = new Date();
export const maxDate = new Date(2024, 1, 1, 23, 49, 59);
export let now = new Date();

export function format(date:any) {
  let mday = date.getDate();
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  mday = mday < 10 ? `0${mday}` : mday;
  return `${date.getFullYear()}-${month}-${mday} ${date.getHours()}:${date.getMinutes()}`;
}

type Props = {
  
};
export function DateTimePicker(props: Props) {
    let date = null;


  const onDateChange = (date:any) => {
    console.log('onChange', format(date));
  
  }

  const onValueChange = (values:any, index:any) => {
    console.log('onValueChange', values, index);
  }

  const onScrollChange = (values:any, index:any) => {
    console.log('onScrollChange', values, index);
  }

  const changeMode = (e:any) => {
    
  }

  const datePicker = (
    <DatePicker
      rootNativeProps={{'data-xx': 'yy'}}
      minDate={minDate}
      maxDate={maxDate}
      defaultDate={now}
      mode={'datetime'}
      locale={enUs}
    />
  );

  return (
    <div className='datetime-picker-container'>
        <span>{date && format(date) || format(now)}</span>
        <div>
            <DatePicker
            rootNativeProps={{'data-xx': 'yy'}}
            defaultDate={date || now}
            mode={'datetime'}
            locale={enUs}
            maxDate={maxDate}
            minDate={minDate}
            onDateChange={onDateChange}
            onValueChange={onValueChange}
            onScrollChange={onScrollChange}
            use12Hours
            />
        </div>
    </div>
  );
};