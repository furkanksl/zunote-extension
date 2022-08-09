import React, { useState } from 'react';
import './App.scss';
import { SaveButton } from './components/SaveButton';
import userLogo from './assets/icons/user.png';
import reminderLogo from './assets/icons/reminder.png';
import categoryLogo from './assets/icons/category.png';
import { DateTimePicker } from './components/DateTimePicker';

function App() {

  const [isReminderSelected , setIsReminderSelected] = useState(false);
  const [isCategorySelected , setIsCategorySelected] = useState(false);

  function toggleReminder(){
    setIsReminderSelected(!isReminderSelected);
    setIsCategorySelected(false);
  }

  function toggleCategory(){
    setIsCategorySelected(!isCategorySelected);
    setIsReminderSelected(false);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <p>Notes</p>
          <div className="profile">
            <img src={userLogo} alt="Profile" title='Profile'/>
          </div>
        </div>

        <div className="functions-section">
          <div className="reminder" onClick={toggleReminder}>
            <img src={reminderLogo} alt="Reminder" title='Set Reminder'/>
          </div>
          <div className="category" onClick={toggleCategory}>
            <img src={categoryLogo} alt="Category" title='Set Category'/>
            </div>
        </div>
        {isReminderSelected ?  <DateTimePicker /> : null}
        <div className="text-field">
          <textarea rows={3}></textarea>
          <SaveButton />
        </div>
      </div>
    </div>
  );
}

export default App;
