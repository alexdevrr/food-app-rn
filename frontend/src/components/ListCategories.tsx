import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Menus} from '../interfaces/CategoryResp';
import {globalStyles} from '../constants/theme';

interface Props {
  menus: Menus[];
}

const ListCategories = ({menus}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(
    '613a4e1ad2b6a0b00cafae2f',
  );

  const onSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  const renderItem = ({menu_tipo, _id, menu_img}: Menus) => {
    const uri = menu_img.url;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...globalStyles.widgetCategory,
          ...globalStyles.shadow,
          backgroundColor: selectedCategory == _id ? '#ffb143' : 'white',
        }}
        onPress={() => onSelectCategory(_id)}>
        <View style={globalStyles.subwidget}>
          <Image source={{uri}} style={globalStyles.imgPrueba} />
        </View>
        <Text style={globalStyles.widgetText}>{menu_tipo}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop: 10}}>
      <FlatList
        data={menus}
        renderItem={({item}: any) => renderItem(item)}
        horizontal={true}
        style={{
          height: 110,
          paddingLeft: 10,
          marginBottom: 10,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListCategories;
