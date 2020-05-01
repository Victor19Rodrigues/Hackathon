import React, { useState } from 'react';

import { Container, Option, Img, Label } from './styles';

import imgDepartamento from '../../assets/img/departamento.png';

const items = [
  {
    key: String(Math.random()),
    img: imgDepartamento,
    label: `Departamento`,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamento,
    label: `Departamento`,
    category: true,
  },
]

export default function Carousel() {
  const [focused, setFocused] = useState(false);
  const onFocus = "tomato";
  const offFocus = "gray";
  
  return (
    <>
      <Container
      >    
      {
        items.map((item)=> ( 
          <Option key={item.key}>
            <Img source={null}/>
            <Label>{item.label}</Label>
          </Option>
        ))
      }
      </Container>
   </>
  );
}
