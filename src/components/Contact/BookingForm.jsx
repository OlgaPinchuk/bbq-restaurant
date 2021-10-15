// NPM packages
import { useState } from "react";

// Project files
import InputField from "../shared/InputField";
import fields from "./fields.json";

export default function BookingForm() {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Derived state
  const isDisabled = !(name && email && date && time);

  function submitForm(event) {
    event.preventDefault();
    resetState();
    alert("The table is reserved. We are waiting for you!");
  }

  function resetState() {
    setName("");
    setEmail("");
    setDate("");
    setTime("");
  }

  return (
    <section className="booking">
      <h2>Book a table</h2>
      <form className="booking-form">
        <InputField state={[name, setName]} options={fields.name} />

        <InputField state={[email, setEmail]} options={fields.email} />

        <InputField state={[date, setDate]} options={fields.date} />

        <InputField state={[time, setTime]} options={fields.time} />
        <small>
          <i>All fields are required fields</i>
        </small>
        <button
          type="submit"
          className="button submit-btn"
          disabled={isDisabled}
          onClick={(event) => submitForm(event)}
        >
          Book
        </button>
      </form>
    </section>
  );
}
