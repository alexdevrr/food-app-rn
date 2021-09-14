import {useState, useEffect} from 'react';
import {hamburgerDB} from '../api/hamburgerDB';
import {Hamburguesa} from '../interfaces/CategoryResp';

export const useHamburger = () => {
  const [listhamburgers, setListHamburgers] = useState<Hamburguesa[]>([]);

  const [isloadinghamburger, setIsLoading] = useState(true);

  const getHamburgers = async () => {
    const resp = await hamburgerDB.get('/hamburguesas');
    setListHamburgers(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getHamburgers();
  }, []);

  return {
    listhamburgers,
    isloadinghamburger,
  };
};
