import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { estadoRaiz } from "../tienda";
import { cerrarModal } from "../caracteristicas/modalSlice";
import { limpiarCarrito } from "../caracteristicas/carritoSlice";

type modalProps = {};

const Modal: React.FC<modalProps> = () => {
  const { estaAbierto } = useSelector((tienda: estadoRaiz) => tienda.modal);
  const enviar = useDispatch();
  return (
    <aside className="z-10 fixed top-0 left-0 container h-full min-h-full flex justify-center items-center bg-slate-950/25">
      <div className="bg-gray-50 rounded p-8">
        <h4 className="font-bold text-base text-center text-black">
          ¿Desea eliminar todos los items?
        </h4>
        <div className="flex justify-between pt-3 space-x-4">
          <button
            onClick={() => {
              enviar(limpiarCarrito());
              enviar(cerrarModal());
            }}
            className="rounded text-violet-500 font-bold bg-transparent border-violet-500 border-2 px-4 shadow-md"
          >
            Aceptar
          </button>
          <button
            onClick={() => {
              enviar(cerrarModal());
            }}
            className="rounded text-red-800 font-bold bg-transparent border-red-800 border-2 px-4 shadow-md"
          >
            Cancelar
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
