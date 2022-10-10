import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth.reducer";
import categoryReducer from "./feature/category.reducer";
import reminderReducer from "./feature/reminder.reducer";

export default configureStore({
    reducer: {
        reminder: reminderReducer,
        category: categoryReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});
