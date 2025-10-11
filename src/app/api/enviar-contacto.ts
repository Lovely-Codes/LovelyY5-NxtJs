import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { firmaGlobal } from './firma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { numTicket, rut, nombre, correo, telefono, direccion, postal, solicitud } = req.body;

  // Configura tu transporte SMTP aquí
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'lovely5.techserv@gmail.com',
      pass: 'dmhe hkji efep ydex',
    },
  });

  const firma = `<p>Saludos Cordiales,</p>`;

  const mailOptionsAdmin = {
    from: 'lovely5.techserv@gmail.com',
    to: 'lovely5.techserv@gmail.com',
    subject: `#${numTicket} ${rut} ha realizado una solicitud`,
    html: `
      <h2>Solicitud de contacto</h2>
      <p><b>RUT:</b> ${rut}</p>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Correo:</b> ${correo}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Dirección:</b> ${direccion}</p>
      <p><b>Código postal:</b> ${postal}</p>
      <h3>Solicitud del cliente:</h3>
      <p>${solicitud}</p>
      ${firmaGlobal}
    `,
  };

  const mailOptionsCliente = {
    from: 'lovely5.techserv@gmail.com',
    to: correo,
    subject: `#${numTicket} Gracias por contactarte con nosotros`,
    html: `
      <h2>Comprobante de solicitud</h2>
      <p>Hemos recibido tu solicitud. A continuación, los detalles:</p>
      <p><b>RUT:</b> ${rut}</p>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Correo:</b> ${correo}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Dirección:</b> ${direccion}</p>
      <p><b>Código postal:</b> ${postal}</p>
      <h3>Solicitud enviada:</h3>
      <p>${solicitud}</p>
      <hr />
      <p>Nuestros operadores están trabajando para resolver tu solicitud lo antes posible! &lt;3</p>
      <p>Si tu asunto es urgente, puedes contactarnos por WhatsApp: <b>+56989598097</b></p>
      ${firmaGlobal}
    `,
  };

  try {
    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsCliente);
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el correo', details: error });
  }
}
