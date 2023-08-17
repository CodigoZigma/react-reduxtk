"use client";
import { Navegacion } from "./componentes/Navegacion";
import { ContenedorCarrito } from "./componentes/ContenedorCarrito";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./componentes/modal";
import { AppEnviar, estadoRaiz } from "./tienda";
import { useEffect } from "react";
import { calcularTotales, getItemsAPI } from "./caracteristicas/carritoSlice";

export default function Home() {
  const { estaAbierto } = useSelector((tienda: estadoRaiz) => tienda.modal);
  const { items, estaCargando } = useSelector(
    (tienda: estadoRaiz) => tienda.carrito
  );
  const enviar = useDispatch<AppEnviar>();
  useEffect(() => {
    enviar(calcularTotales());
  }, [items]);

  useEffect(() => {
    enviar(getItemsAPI());
  }, []);

  if (estaCargando) {
    return (
      <div className="container h-full min-h-screen bg-black/75 flex justify-center items-center">
        <div className="bg-gray-50 rounded p-8">
          <h1 className="font-bold text-base text-center text-black">
            Cargando...
          </h1>
        </div>
      </div>
    );
  }
  return (
    <main className="container m-0 p-0 flex flex-col h-full min-h-screen bg-green-50">
      {estaAbierto && <Modal />}
      <Navegacion />
      <div className="container m-0 p-0 flex flex-col flex-1 h-full justify-center content-center bg-slate-400">
        <ContenedorCarrito />
      </div>
    </main>
  );
}
