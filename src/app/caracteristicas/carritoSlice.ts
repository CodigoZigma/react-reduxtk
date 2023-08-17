import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import itemsCarrito, { TItemCarrito } from "../ItemsCarrito";
import { estadoRaiz } from "../tienda";

export type TCarritoAPI = {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
};

export type TAPIError = {
  mensaje: string;
};

export const estadoAPI = (state: estadoRaiz) => state.carrito.estaCargando;

interface Icarrito {
  items: TItemCarrito[];
  itemsAPI: TCarritoAPI[];
  cantidad: number;
  total: number;
  error: string | null;
  estaCargando: boolean;
}
const initialState = {
  items: [] as TItemCarrito[],
  itemsAPI: [] as TCarritoAPI[],
  total: 0,
  estaCargando: true,
} as Icarrito;

const url = "https://course-api.com/react-useReducer-cart-project";

export const getItemsAPI = createAsyncThunk<
  TCarritoAPI[],
  undefined,
  { rejectValue: TAPIError }
>("carrito/getItems", async (undefined, respuestaApi) => {
  const response = await fetch(url);
  if (response.status !== 200) {
    return respuestaApi.rejectWithValue({
      mensaje: "Error al recibir respuesta.",
    });
  }
  const datos: TCarritoAPI[] = await response.json();
  return datos;

  // return fetch(url)
  //   .then((resp) => resp.json)
  //   .catch((err) => console.log(err));
});

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    agregarItem: (state, action: PayloadAction<TItemCarrito>) => {
      state.items.push(action.payload);
    },
    eliminarItem: (state, action: PayloadAction<string>) => {
      const itemId: string = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    incrementarCantidad: (state, { payload }: PayloadAction<string>) => {
      const item: TItemCarrito | undefined = state.items.find(
        (item) => item.id == payload
      );
      if (item) item.cantidad++;
    },
    disminuirCantidad: (state, { payload }: PayloadAction<string>) => {
      const item: TItemCarrito | undefined = state.items.find(
        (item) => item.id == payload
      );
      if (item) item.cantidad--;
    },
    calcularTotales: (state) => {
      let cantidad = 0;
      let total = 0;
      state.items.forEach((item) => {
        cantidad += item.cantidad;
        total += item.cantidad * Number.parseFloat(item.precio);
      });
      state.cantidad = cantidad;
      state.total = total;
    },
    limpiarCarrito: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItemsAPI.pending, (state) => {
      state.estaCargando = true;
      state.error = null;
    }),
      builder.addCase(getItemsAPI.fulfilled, (state, { payload }) => {
        state.itemsAPI = [...payload];
        state.itemsAPI.forEach((itemAPI) => {
          let item: TItemCarrito = {
            id: itemAPI.id,
            titulo: itemAPI.title,
            precio: itemAPI.price,
            imagen: itemAPI.img,
            cantidad: itemAPI.amount,
          };
          state.items.push(item);
        });
        state.estaCargando = false;
        //console.log(payload);
      }),
      builder.addCase(getItemsAPI.rejected, (state, { payload }) => {
        if (payload) state.error = payload.mensaje;
        state.estaCargando = false;
      });
  },
});

export const {
  agregarItem,
  eliminarItem,
  incrementarCantidad,
  disminuirCantidad,
  limpiarCarrito,
  calcularTotales,
} = carritoSlice.actions;
export default carritoSlice.reducer;
