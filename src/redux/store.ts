import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './feature/category.reducer'
import reminderReducer from './feature/reminder.reducer'

export default configureStore({
  reducer: {
    reminder : reminderReducer,
    category : categoryReducer
  },
})