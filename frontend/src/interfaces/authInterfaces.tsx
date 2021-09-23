export interface GeneralState {
  auth: {
    displayname: string;
    uid: string;
  };

  cart: {
    cart: [{id: string; qty: number}];
    idItem: string;
    items: [id: string];
  };
}

export interface authInterface {
  uid: '';
  displayName: '';
}
