"use client";
import { useState } from "react";
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return <form className="contact-form" onSubmit={(event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }} onChange={() => setSubmitted(false)}>
    <h2>Tell us what you have in mind.</h2>
    <p>Share a little about your needs and let’s start a conversation.</p>
    <label htmlFor="name">Name <span>*</span></label>
    <input id="name" name="name" autoComplete="name" required maxLength={120} onChange={e=>e.currentTarget.setCustomValidity(e.currentTarget.value.trim() ? "" : "Please enter your name.")} placeholder="Your full name" />
    <label htmlFor="email">Email <span>*</span></label>
    <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
    <label htmlFor="requirement">Requirement <span>*</span></label>
    <textarea id="requirement" name="requirement" required maxLength={3000} rows={4} placeholder="How can we help your team?" onChange={e=>e.currentTarget.setCustomValidity(e.currentTarget.value.trim() ? '' : 'Please describe your requirement.')} />
    <label htmlFor="time">Preferred date & time <small>(optional, your local time)</small></label>
    <input id="time" name="time" type="datetime-local" />
    <button className="button button--primary button--large" type="submit">Submit enquiry ↗</button>
    <p className="form-note">Demo form — no email is sent and your details are not stored.</p>
    {submitted && <p role="status" className="form-status">Thank you! Your demo enquiry is complete. No email has been sent.</p>}
  </form>;
}
