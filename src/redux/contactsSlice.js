import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';


const contactsSlice = createSlice({
    name: 'contactsState',
    initialState: {
        contacts: []
    },
    reducers: {
        addContact(state, { payload }) {
            state.contacts.push(payload)
          
        },
        deleteContact(state, { payload }) {
            return {
                contacts:  state.contacts.filter((contact => contact.id !== payload)) 
            }                      
        }
    }
})

const persistConfig = {
  key: 'root',
  storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const {addContact, deleteContact} = contactsSlice.actions