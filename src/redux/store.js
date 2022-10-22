import { configureStore } from "@reduxjs/toolkit";
// import { createAction, createReducer } from '@reduxjs/toolkit'
import { contactsSlice } from './contactsSlice'
import { filterSlice } from './filterSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
})


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

