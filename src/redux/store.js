import { configureStore } from "@reduxjs/toolkit";
// import { createAction, createReducer } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { filterSlice } from './filterSlice'

import { persistStore,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';



export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)


// export const addContact = createAction('contacts/add')
// export const deleteContact = createAction('contacts/delete')


// export const contactsReducer = createReducer([], {
//     [addContact]: (state, action) => [...state, action.payload],
//     [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
// })



// export const addFilter = createAction('filter/addFilter')

// export const filterReducer = createReducer('', {
//     [addFilter]: (state, action) => state = action.payload
// })

