import {DOWNLOAD_IDS_SUCCESS, DOWNLOAD_IDS_ERROR} from '../types/index';
import {ADD_TO_CART, REMOVE_TO_CART, ADJUST_QTY} from '../types/index';

export const addCartAction = (itemID: string) => ({
  type: ADD_TO_CART,
  payload: {
    id: itemID,
  },
});

export const removeFromCartAction = (itemID: string) => ({
  type: REMOVE_TO_CART,
  payload: {
    id: itemID,
  },
});

export const adjustQtyAction = (itemID: string, value: any) => ({
  type: ADJUST_QTY,
  payload: {
    id: itemID,
  },
});

export const loadCurrentItemAction = (item: string) => ({
  type: ADJUST_QTY,
  payload: item,
});

// Descarga los id's de las hamburguesas de la DB
export const getIdHamburgersAction = (ids: any) => {
  return (dispatch: any) => {
    dispatch(downloadIdSucess(ids));
  };
};

const downloadIdSucess = (ids: any) => ({
  type: DOWNLOAD_IDS_SUCCESS,
  payload: ids,
});

const downloadIdError = () => ({
  type: DOWNLOAD_IDS_ERROR,
});
