import React from "react";
import productosData from "../data/productos.json";
import Image from "next/image";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
}

export default function SmartphonesPage() {
  // Filtrar productos que sean smartphones (puedes ajustar la lógica según tu data)
  const smartphones = (productosData as Producto[]).filter(p => p.nombre.toLowerCase().includes("smartphone"));

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
      <h1>Smartphones</h1>
      {smartphones.length === 0 ? (
        <p>No hay smartphones disponibles actualmente.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {smartphones.map(producto => (
            <div key={producto.id} style={{ border: "1px solid #ccc", padding: 16, width: 250 }}>
              <Image src={producto.imagen} alt={producto.nombre} width={80} height={80} />
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
