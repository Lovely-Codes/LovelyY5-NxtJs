import React, { useState } from "react";
import productosData from "../../data/productos.json";
import Image from "next/image";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
}

interface CarritoItem extends Producto {
  cantidad: number;
}

export default function ProductosPage() {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [form, setForm] = useState({
    rut: "",
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    postal: ""
  });
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [numVenta, setNumVenta] = useState<string>("");

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id && item.cantidad < item.stock
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ flex: 2 }}>
        <h1>Productos disponibles</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {productosData.map((producto: Producto) => (
            <div key={producto.id} style={{ border: "1px solid #ccc", padding: 16, width: 250 }}>
              <Image src={producto.imagen} alt={producto.nombre} width={80} height={80} />
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
              <button onClick={() => agregarAlCarrito(producto)} disabled={!!carrito.find(c => c.id === producto.id && c.cantidad >= producto.stock)}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, borderLeft: "2px solid #eee", paddingLeft: 16 }}>
        <h2>Carrito de compras</h2>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : compraRealizada ? (
          <div>
            <h3>¡Compra realizada!</h3>
            <p>Tu número de venta es: <b>{numVenta}</b></p>
            <p>Por favor realiza una transferencia electrónica a la siguiente cuenta:</p>
            <ul>
              <li>Cuenta: <b>99999999-9</b></li>
              <li>Nombre: nombre apellido</li>
              <li>Banco: nombre banco</li>
              <li>Tipo de cuenta: tipo de cuenta</li>
              <li>Número de cuenta: numero de cuenta</li>
            </ul>
            <p>Envía el comprobante de pago por correo electrónico a <b>lovely5.techserv@gmail.com</b> o por WhatsApp al <b>+56989598097</b> junto con tu RUT.</p>
            <p>Recibirás confirmación una vez validado el pago.</p>
          </div>
        ) : mostrarFormulario ? (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // Generar número de venta simple
              const ventaId = Math.floor(Math.random() * 1000000).toString();
              setNumVenta(ventaId);
              setCompraRealizada(true);
              // Enviar correo al administrador (API route)
              await fetch("/api/enviar-venta", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  numVenta: ventaId,
                  rut: form.rut,
                  nombre: form.nombre,
                  correo: form.correo,
                  telefono: form.telefono,
                  direccion: form.direccion,
                  postal: form.postal,
                  productos: carrito,
                  total: carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
                })
              });
            }}
          >
            <h3>Datos del cliente</h3>
            <label>RUT:<br /><input required value={form.rut} onChange={e => setForm(f => ({ ...f, rut: e.target.value }))} /></label><br />
            <label>Nombre completo:<br /><input required value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} /></label><br />
            <label>Correo:<br /><input required type="email" value={form.correo} onChange={e => setForm(f => ({ ...f, correo: e.target.value }))} /></label><br />
            <label>Teléfono (+56):<br /><input required value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} /></label><br />
            <label>Dirección:<br /><input required value={form.direccion} onChange={e => setForm(f => ({ ...f, direccion: e.target.value }))} /></label><br />
            <label>Código postal:<br /><input required value={form.postal} onChange={e => setForm(f => ({ ...f, postal: e.target.value }))} /></label><br />
            <button type="submit">Comprar</button>
          </form>
        ) : (
          <>
            <ul>
              {carrito.map((item) => (
                <li key={item.id}>
                  {item.nombre} x {item.cantidad} (${item.precio * item.cantidad})
                  <button onClick={() => quitarDelCarrito(item.id)} style={{ marginLeft: 8 }}>Quitar</button>
                </li>
              ))}
            </ul>
            <p>Total: <b>${carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)}</b></p>
            <button onClick={() => setMostrarFormulario(true)}>Ir a comprar</button>
          </>
        )}
      </div>
    </div>
  );
}
