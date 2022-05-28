export interface GeneralState {
  auth: {
    displayname: string;
    uid: string;
    estado: boolean;
    google: boolean;
    nombre: string;
    email: string;
    rol: string;
  };

  cart: {
    cart: [
      {
        id: string;
        qty: number;
        hamburguesa_precio: number;
        name: string;
        hamburguesa_img: string;
      },
    ];
    idItem: string;
    items: [id: string];
  };
}

export interface Cart {
  cart: [
    {
      id: string;
      qty: number;
      hamburguesa_precio: number;
      name: string;
      hamburguesa_img: string;
    },
  ];
}

export interface authInterface {
  displayName: '';
  email: '';
  rol: '';
}
