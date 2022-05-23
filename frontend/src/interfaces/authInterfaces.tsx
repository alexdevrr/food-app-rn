export interface GeneralState {
  auth: {
    displayname: string;
    uid: string;
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
  uid: '';
  displayName: '';
}
