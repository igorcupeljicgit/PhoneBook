import React from "react";
import { Switch, Route } from "react-router-dom";

import {PhoneBook} from "../components/PhoneBook"
import  AdressList  from "../components/phone_adress_list/AdressList";
import  AdressListItemDetail  from "../components/phone_adress_list/AdressListItemDetail";
import AddContact from "../components/phone_adress_list/AddContact";
import EditUser from "../components/phone_adress_list/EditUser";
 

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/edituser" component={EditUser}/>
        <Route path="/addcontact" component={AddContact}/>
        <Route path="/user" component={AdressListItemDetail}/>
        <Route path="/phonebook" component={AdressList} />
        <Route path="/" component={PhoneBook} />
      </Switch>
    </div>
  );
}

export default App;
