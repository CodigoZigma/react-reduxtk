import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./caracteristicas/carritoSlice";
import modalReducer from "./caracteristicas/modalSlice";

export const tienda = configureStore({
  reducer: { carrito: carritoReducer, modal: modalReducer },
});

export type estadoRaiz = ReturnType<typeof tienda.getState>;
export type AppEnviar = typeof tienda.dispatch;
