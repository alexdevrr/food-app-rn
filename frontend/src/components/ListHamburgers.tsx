import React from 'react';
import {FlatList} from 'react-native';
import {Hamburguesa} from '../interfaces/CategoryResp';

import CardHamburger from './CardHamburger';

interface Props {
  listhamburgers: Hamburguesa[];
}

const ListHamburgers = ({listhamburgers}: Props) => {
  const renderItem = (item: Hamburguesa) => {
    return <CardHamburger hamburgers={item} />;
  };

  return (
    <FlatList
      data={listhamburgers}
      renderItem={({item}) => renderItem(item)}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListHamburgers;
