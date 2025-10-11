"use client";

import { motion } from "framer-motion";
import { Smartphone, Headphones, Laptop, ShoppingBag, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-purple-700 to-indigo-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Bienvenido a <span className="text-pink-400">Lovely Y5</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl"
        >
          Tu tienda online de tecnología y gadgets al mejor precio 💻📱🎧
        </motion.p>

        <motion.a
          href="/productos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-pink-300 transition"
        >
          Ver Productos
        </motion.a>
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
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <Smartphone className="mx-auto h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smartphones</h3>
            <p className="text-gray-600">Encuentra las últimas marcas y modelos.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <Headphones className="mx-auto h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audio</h3>
            <p className="text-gray-600">Audífonos, parlantes y accesorios premium.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center">
            <ShoppingBag className="mx-auto h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ofertas</h3>
            <p className="text-gray-600">Descuentos especiales por tiempo limitado.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
