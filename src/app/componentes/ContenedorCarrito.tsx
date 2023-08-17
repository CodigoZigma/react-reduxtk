"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppEnviar, estadoRaiz } from "../tienda";
import { ItemCarro } from "./ItemCarro";
import { abrirModal } from "../caracteristicas/modalSlice";

export const ContenedorCarrito: React.FC = () => {
  const { cantidad, total, items } = useSelector(
    (tienda: estadoRaiz) => tienda.carrito
  );
  const enviar = useDispatch<AppEnviar>();
  return (
    <section className="flex flex-col flex-1 container h-full bg-cyan-50 mx-auto justify-start items-center">
      <header className="container flex justify-center items-center">
        <h2 className="container text-5xl text-center text-slate-800 font-bold p-14">
          Tu bolsa
        </h2>
      </header>
      <div className="container flex flex-col w-3/5 mx-auto">
        {cantidad < 1 ? (
          <h4 className="container text-center text-slate-700 font-semibold">
            Tu carrito está vacío.
          </h4>
        ) : (
          items.map((item) => <ItemCarro key={item.id} {...item} />)
        )}
      </div>
      {cantidad >= 1 && (
        <footer className="flex flex-col place-items-center w-3/5 text-center py-10 mx-auto">
          <hr className="w-full border-slate-400  b-2" />
          <div className="w-full">
            <h4 className="container text-left pt-5 font-bold text-slate-900">
              Total <span className="float-right">${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            onClick={() => {
              enviar(abrirModal());
            }}
            className="rounded text-red-800 font-bold bg-transparent border-red-800 border-2 px-4 mt-8 shadow-md"
          >
            Limpiar
          </button>
        </footer>
      )}
    </section>
  );
};
