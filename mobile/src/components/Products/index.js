import React from 'react';
import {AntDesign} from '@expo/vector-icons';

import { Description, ProductList,ProductImage, ProductItem, Stars ,Value } from './styles';

import {products} from '../../assets/Constants/index';

export default function List() {
 
  return (
    <ProductList
    Vertical
    data={products}
    numColumns={2}
    keyExtractor={product => String(product.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item:product}) => (
      <ProductItem>

        <ProductImage source={product.img}></ProductImage>
        <Description>{ String(product.description).substr(0,25) +" .." }</Description>
        <Stars>
         {product.stars.map( (star) => (
            <AntDesign key={Math.random()} name="star" color={ star ? "#E60014" : "#CCC"} size={15}/>
          ))}
        </Stars>
        <Value>{Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(product.value)}
        </Value>
        
      </ProductItem>

    )}
    />

  );
}
