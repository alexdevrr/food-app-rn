export interface GeneralState {
  auth: {
    displayname: string;
    uid: string;
  };

  cart: {
    cart: [{id: string; qty: number; hamburguesa_precio: number}];
    idItem: string;
    items: [id: string];
  };
}

export interface Cart {
  cart: [{id: string; qty: number; hamburguesa_precio: number}];
}

export interface authInterface {
  uid: '';
  displayName: '';
}
