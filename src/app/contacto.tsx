import React, { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({
    rut: "",
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    postal: "",
    solicitud: ""
  });
  const [enviado, setEnviado] = useState(false);
  const [numTicket, setNumTicket] = useState("");

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 32 }}>
      <h1>Contacto</h1>
      {enviado ? (
        <div>
          <h2>¡Solicitud enviada!</h2>
          <p>Tu número de ticket es: <b>{numTicket}</b></p>
          <p>Te hemos enviado un comprobante a tu correo. Nuestros operadores están trabajando para resolver tu solicitud lo antes posible! &lt;3</p>
          <p>Si tu asunto es urgente, puedes contactarnos por WhatsApp: <b>+56989598097</b></p>
          <p>Saludos Cordiales,</p>
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const ticketId = Math.floor(Math.random() * 1000000).toString();
            setNumTicket(ticketId);
            setEnviado(true);
            await fetch("/api/enviar-contacto", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                numTicket: ticketId,
                ...form
              })
            });
          }}
        >
          <label>RUT:<br /><input required value={form.rut} onChange={e => setForm(f => ({ ...f, rut: e.target.value }))} /></label><br />
          <label>Nombre completo:<br /><input required value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} /></label><br />
          <label>Correo:<br /><input required type="email" value={form.correo} onChange={e => setForm(f => ({ ...f, correo: e.target.value }))} /></label><br />
          <label>Teléfono (+56):<br /><input required value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} /></label><br />
          <label>Dirección:<br /><input required value={form.direccion} onChange={e => setForm(f => ({ ...f, direccion: e.target.value }))} /></label><br />
          <label>Código postal:<br /><input required value={form.postal} onChange={e => setForm(f => ({ ...f, postal: e.target.value }))} /></label><br />
          <label>Solicitud:<br /><textarea required maxLength={3000} value={form.solicitud} onChange={e => setForm(f => ({ ...f, solicitud: e.target.value }))} style={{ width: "100%", height: 120 }} /></label><br />
          <button type="submit">Enviar solicitud</button>
        </form>
      )}
    </div>
  );
}
