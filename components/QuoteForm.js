 "use client";

import { useState } from "react";

const initial = {
  name: "",
  company: "",
  phone: "",
  email: "",
  customerType: "Homeowner",
  service: "Mechanical",
  details: "",
  equipment: "",
  website: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submit(event) {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong.");
      setStatus({ type: "success", message: "Thanks. Your request has been sent. We will contact you soon." });
      setForm(initial);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <h3>Request a Quote</h3>
      <p className="form-note">Tell us what you need. Add equipment details or photos after we contact you.</p>

      <input
        className="honeypot"
        tabIndex="-1"
        autoComplete="off"
        name="website"
        value={form.website}
        onChange={update}
        aria-hidden="true"
      />

      <div className="form-row">
        <label>Name<input required name="name" value={form.name} onChange={update} autoComplete="name" /></label>
        <label>Company / Business<input name="company" value={form.company} onChange={update} autoComplete="organization" /></label>
      </div>

      <div className="form-row">
        <label>Phone<input required name="phone" value={form.phone} onChange={update} autoComplete="tel" /></label>
        <label>Email<input required type="email" name="email" value={form.email} onChange={update} autoComplete="email" /></label>
      </div>

      <div className="form-row">
        <label>
          Customer type
          <select name="customerType" value={form.customerType} onChange={update}>
            <option>Homeowner</option>
            <option>Restaurant / Food Service</option>
            <option>Commercial Property</option>
            <option>Industrial Facility</option>
            <option>Property Manager</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Service needed
          <select name="service" value={form.service} onChange={update}>
            <option>Mechanical</option>
            <option>Construction</option>
            <option>Renovation</option>
            <option>Equipment Maintenance</option>
            <option>Equipment Installation</option>
            <option>Repair / Troubleshooting</option>
            <option>Preventative Maintenance</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label>Project / Problem Details<textarea required name="details" value={form.details} onChange={update} rows="5" placeholder="What needs to be built, repaired, installed, renovated, or maintained?" /></label>
      <label>Equipment information (optional)<textarea name="equipment" value={form.equipment} onChange={update} rows="3" placeholder="Equipment type, manufacturer, model, symptoms, etc." /></label>

      <button className="btn btn-gold" disabled={sending}>
        {sending ? "Sending..." : "Send Quote Request"} <span>→</span>
      </button>

      {status.message && (
        <p className={`form-status ${status.type}`} role="status">{status.message}</p>
      )}

      <p className="form-disclaimer">
        Submitting a request does not constitute acceptance of work. Scope, pricing, scheduling, and service requirements will be confirmed before work begins.
      </p>
    </form>
  );
}
