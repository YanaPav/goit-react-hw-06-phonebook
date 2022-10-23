import React from "react";
import css from './ContactList.module.css'
import PropTypes from "prop-types"
import {useDispatch} from 'react-redux'
import { deleteContact } from "redux/contactsSlice";


export const ContactList = ({ contacts }) => {
    const dispatch = useDispatch()
    return (
        <ul className={css.contsctList}>
            {contacts?.map(({name, number, id}) => {
                return <li key={id}>{name}: {number} <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button></li>
            })}
        </ul>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    // handleClick: PropTypes.func.isRequired
}


