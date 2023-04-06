import React from "react";

export const ContactPicker = ({contacts, contact, onChange}) => {
    return (
        <select onChange={onChange}>
        <option key="none" value="none" select="selected">Select a contact...</option>
        {contacts.map(c => (
            <option key={c.name} value={c.name}>{c.name}</option>
        ))}
        </select>
    );
};