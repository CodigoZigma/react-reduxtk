import Image from "next/image";
import { itemCarrito } from "../ItemsCarrito";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { useDispatch } from "react-redux";
import {
  eliminarItem,
  incrementarCantidad,
  disminuirCantidad,
} from "../caracteristicas/carritoSlice";

export const ItemCarro: React.FC<itemCarrito> = ({
  id,
  titulo,
  precio,
  imagen,
  cantidad,
}) => {
  const enviar = useDispatch();

  return (
    <article className="container flex flex-row mb-5">
      <Image
        src={imagen}
        alt={"celular"}
        width={80}
        height={80}
        className={"w-20 h-20"}
      ></Image>
      <div className="pl-10 grow">
        <h4 className="font-bold text-base">{titulo}</h4>
        <h4 className="font-bold text-base text-slate-500">${precio}</h4>
        <button
          onClick={() => {
            enviar(eliminarItem(id));
          }}
          className="text-violet-400 font-bold text-sm mt-2"
        >
          Eliminar
        </button>
      </div>
      <div className="flex flex-col place-items-center items-center place-content-center">
        <button
          onClick={() => {
            enviar(incrementarCantidad(id));
          }}
        >
          <SlArrowUp className="text-violet-900" />
        </button>
        <p>{cantidad}</p>
        <button
          onClick={() => {
            cantidad == 1
              ? enviar(eliminarItem(id))
              : enviar(disminuirCantidad(id));
          }}
        >
          <SlArrowDown className="text-violet-900" />
        </button>
      </div>
    </article>
  );
};
