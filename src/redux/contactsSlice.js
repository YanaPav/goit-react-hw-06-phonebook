import { createSlice } from "@reduxjs/toolkit";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, {payload}) {
            return [...state, payload]
        },
        deleteContact(state, { payload }) {
            return state.filter((contact => contact.id !== payload))            
        }
    }
})

export const {addContact, deleteContact} = contactsSlice.actions