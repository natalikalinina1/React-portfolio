
import React from "react";
import { Element } from "react-scroll";
import "./contacts.css";
//import { Form } from "../../features/form/form"; используем либо хук либо этот код формы
import {HookForm} from "../../features/hookForm/hookForm"
 
export const Contacts = () =>{
    return (

        <Element name = "contacts" className="contacts">
        
         <br/>
         <HookForm/>
        </Element>
    );
};