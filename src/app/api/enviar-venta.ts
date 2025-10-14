// ...existing code...
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { firmaGlobal } from './firma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { numVenta, rut, nombre, correo, telefono, direccion, postal, productos, total } = req.body;

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

  type Producto = { nombre: string; cantidad: number; precio: number };
  const productosHtml = (productos as Producto[]).map((p) => `<li>${p.nombre} x ${p.cantidad} ($${p.precio * p.cantidad})</li>`).join('');

  const mailOptionsAdmin = {
    from: 'lovely5.techserv@gmail.com',
    to: 'lovely5.techserv@gmail.com',
    subject: `#${numVenta} ${rut} ha realizado una compra`,
    html: `
      <h2>Venta realizada</h2>
      <p><b>RUT:</b> ${rut}</p>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Correo:</b> ${correo}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Dirección:</b> ${direccion}</p>
      <p><b>Código postal:</b> ${postal}</p>
      <h3>Productos:</h3>
      <ul>${productosHtml}</ul>
      <p><b>Total a pagar:</b> $${total}</p>
      ${firmaGlobal}
    `,
  };

  const mailOptionsCliente = {
    from: 'lovely5.techserv@gmail.com',
    to: correo,
    subject: `Confirmación de compra #${numVenta}`,
    html: `
      <h2>¡Gracias por tu compra!</h2>
      <p>Hemos recibido tu pedido. A continuación, los detalles de tu compra:</p>
      <p><b>RUT:</b> ${rut}</p>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Correo:</b> ${correo}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Dirección:</b> ${direccion}</p>
      <p><b>Código postal:</b> ${postal}</p>
      <h3>Productos:</h3>
      <ul>${productosHtml}</ul>
      <p><b>Total a pagar:</b> $${total}</p>
      <hr />
      <p><b>Para hacer efectiva tu compra, por favor realiza una transferencia electrónica por el monto total de la compra a la siguiente cuenta:</b></p>
      <ul>
        <li>RUT: <b>20954384-2</b></li>
        <li>Nombre: Jacqueline Sibel Torti Parraguez</li>
        <li>Banco: Mercado Pago</li>
        <li>Tipo de cuenta: Cuenta Vista</li>
        <li>Número de cuenta: 1070141677</li>
      </ul>
      <p>Envía el comprobante de pago por correo electrónico a <b>lovely5.techserv@gmail.com</b> o por WhatsApp al <b>+56989598097</b> junto con tu RUT.</p>
      <p>Esperamos tu comprobante para hacer efectiva la compra. ¡Gracias por confiar en nosotros!</p>
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
