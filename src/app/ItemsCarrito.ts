export type TItemCarrito = {
  id: string;
  titulo: string;
  precio: string;
  imagen: string;
  cantidad: number;
};

const itemsCarrito: TItemCarrito[] = [
  {
    id: "rec1JZlfCIBOPdcT2",
    titulo: "Samsung Galaxy S8",
    precio: "399.99",
    imagen: "https://www.course-api.com/images/cart/phone-1.png",
    cantidad: 1,
  },
  {
    id: "recB6qcHPxb62YJ75",
    titulo: "google pixel",
    precio: "499.99",
    imagen: "https://www.course-api.com/images/cart/phone-2.png",
    cantidad: 1,
  },
  {
    id: "recdRxBsE14Rr2VuJ",
    titulo: "Xiaomi Redmi Note 2",
    precio: "699.99",
    imagen: "https://www.course-api.com/images/cart/phone-3.png",
    cantidad: 1,
  },
  {
    id: "recwTo160XST3PIoW",
    titulo: "Samsung Galaxy S7",
    precio: "599.99 ",
    imagen: "https://www.course-api.com/images/cart/phone-4.png",
    cantidad: 1,
  },
];
export default itemsCarrito;
