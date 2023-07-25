import React from "react";
import styles from "./contactes.module.css";
import { Label } from "../label/Label.js";

function Contact({ email, phone }) {
  return (
    <div>
      <Label color={"green"}>Contact Information</Label>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
    </div>
  );
}

export default Contact;
