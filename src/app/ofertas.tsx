import React from "react";
import productosData from "../data/productos.json";
import Image from "next/image";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  stock: number;
}

export default function OfertasPage() {
  // Filtrar productos con precioAnterior y precioAnterior > precio
  const ofertas = (productosData as Producto[]).filter(p => p.precioAnterior && p.precioAnterior > p.precio);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
      <h1>Ofertas</h1>
      {ofertas.length === 0 ? (
        <p>No hay ofertas disponibles actualmente.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {ofertas.map(producto => (
            <div key={producto.id} style={{ border: "1px solid #ccc", padding: 16, width: 250 }}>
              <Image src={producto.imagen} alt={producto.nombre} width={80} height={80} />
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p>
                <span style={{ textDecoration: "line-through", color: "#888" }}>${producto.precioAnterior}</span>
                <span style={{ color: "#e1306c", fontWeight: "bold", marginLeft: 8 }}>${producto.precio}</span>
              </p>
              <p>Stock: {producto.stock}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
