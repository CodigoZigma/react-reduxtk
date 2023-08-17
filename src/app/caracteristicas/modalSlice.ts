import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Imodal {
  estaAbierto: boolean;
}

const initialState = {
  estaAbierto: false,
} as Imodal;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    abrirModal: (state) => {
      state.estaAbierto = true;
    },
    cerrarModal: (state) => {
      state.estaAbierto = false;
    },
  },
});

export const { abrirModal, cerrarModal } = modalSlice.actions;
export default modalSlice.reducer;
