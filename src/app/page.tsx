"use client";

import { motion } from "framer-motion";
import { Smartphone, Headphones, Laptop, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO PINK */}
      <section style={{ background: '#ffb6ce', width: '100%', minHeight: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', padding: '48px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: 32, textShadow: '0 2px 8px #e1306c55' }}>
            Conexión con cariño, cuidado con propósito.
          </h1>
          <div style={{ marginTop: 16 }}>
            <svg width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="20" width="120" height="180" rx="32" fill="#fff" />
              <circle cx="90" cy="180" r="12" fill="#ffb6ce" />
              <path d="M60 80 Q90 40 120 80" stroke="#ffb6ce" strokeWidth="8" fill="none" />
              <path d="M75 100 Q90 80 105 100" stroke="#ffb6ce" strokeWidth="6" fill="none" />
              <path d="M80 120 Q90 110 100 120" stroke="#ffb6ce" strokeWidth="4" fill="none" />
              <circle cx="90" cy="110" r="18" fill="#ffb6ce" />
              <text x="90" y="116" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff">Y5</text>
            </svg>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          ¿Por qué comprar en Lovely Y5?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <Laptop className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Productos garantizados</h3>
            <p className="text-gray-600">
              Vendemos solo equipos originales con garantía oficial y soporte técnico.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pagos seguros</h3>
            <p className="text-gray-600">
              Tus transacciones están protegidas con encriptación de nivel bancario.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <Truck className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Envíos rápidos</h3>
            <p className="text-gray-600">
              Recibe tus productos en 24 – 48 horas con seguimiento en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="py-20 bg-gray-100 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Categorías populares
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/smartphones" className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center cursor-pointer" style={{ textDecoration: "none" }}>
            <Smartphone className="mx-auto h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smartphones</h3>
            <p className="text-gray-600">Encuentra las últimas marcas y modelos.</p>
          </Link>

          <Link href="/audio" className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center cursor-pointer" style={{ textDecoration: "none" }}>
            <Headphones className="mx-auto h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audio</h3>
            <p className="text-gray-600">Audífonos, parlantes y accesorios premium.</p>
          </Link>

          <Link href="/ofertas" className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center cursor-pointer" style={{ textDecoration: "none" }}>
            <ShoppingBag className="mx-auto h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ofertas</h3>
            <p className="text-gray-600">Descuentos especiales por tiempo limitado.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
