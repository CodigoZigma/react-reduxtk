"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppEnviar, estadoRaiz } from "./../tienda";
import { BsHandbag } from "react-icons/Bs";
import { useEffect } from "react";
import { calcularTotales, getItemsAPI } from "../caracteristicas/carritoSlice";

export const Navegacion = () => {
  const { cantidad } = useSelector((tienda: estadoRaiz) => tienda.carrito);
  return (
    <>
      <nav className="container flex align-middle h-16">
        <div className="container flex flex-row align-middle w-full h-16 bg-indigo-600">
          <h3 className="grow self-center pl-5 text-3xl font-bold text-stone-50">
            Mi tienda
          </h3>
          <div className="shrink w-fit self-center relative p-0 mr-5 font-bold ">
            <BsHandbag className="text-3xl text-gray-100 " />
            <p className="absolute -top-1 -right-1 z-1 flex rounded-full text-sm text-slate-200 bg-violet-400 p-0 m-0 w-5 h-5 justify-center items-center">
              {cantidad}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};
