import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
    const ROUTES = {
        CONTACTS: "/contacts",
        APPOINTMENTS: "/appointments",
    };

    const [ contacts, setContacts ] = useState([]);
    const addContact = (name, phone, email) => {
        setContacts( prev => [...prev, {name, phone, email}]);
    };
    
    const [ appointments, setAppointment ] = useState([]);
    const addAppointment = (title, contact, date, time) => {
        setAppointment(prev => [...prev, {title, contact, date, time}])
    };

    console.log('contacts', contacts);
    console.log('appointments', appointments);

    return (
        <>
        <nav>
            <NavLink to={ROUTES.CONTACTS} activeClassName="active">
            Contacts
            </NavLink>
            <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
            Appointments
            </NavLink>
        </nav>
        <main>
            <Switch>
            <Route path={ROUTES.CONTACTS}>
                <ContactsPage contacts={contacts} addContact={addContact}/>
            </Route>
            <Route path={ROUTES.APPOINTMENTS}>
                <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment}/>
            </Route>
            </Switch>
        </main>
        </>
    );
}

export default App;
