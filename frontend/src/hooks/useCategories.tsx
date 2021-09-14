import {useState, useEffect} from 'react';
import {hamburgerDB} from '../api/hamburgerDB';
import {Menus} from '../interfaces/CategoryResp';

export const useCategories = () => {
  const [menus, setMenus] = useState<Menus[]>([]);
  const [isloadingcategory, setIsLoading] = useState(true);

  const getCategories = async () => {
    const resp = await hamburgerDB.get('/menus');
    setMenus(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {
    menus,
    isloadingcategory,
  };
};
