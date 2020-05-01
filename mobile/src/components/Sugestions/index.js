import React, { useState } from 'react';

import { Container, Option, Img, Label, OptionHeader, OptionButton, OptionText } from './styles';

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
  {
    key: String(Math.random()),
    img: imgDepartamento,
    label: `Departamento`,
    category: true,
  },
  {
    key: String(Math.random()),
    img: imgDepartamento,
    label: `Departamento`,
    category: true,
  },
  {
    key: String(Math.random()),
    img: imgDepartamento,
    label: `Departamento`,
    category: true,
  },
  {
    key: String(Math.random()),
    img: imgDepartamento,
    label: `Departamento`,
    category: true,
  },
  {
    key: String(Math.random()),
    img: imgDepartamento,
    label: `Departamento`,
    category: true,
  },
]

export default function Sugestions() {
  const [focused, setFocused] = useState(false);
  const onFocus = "tomato";
  const offFocus = "gray";
  
  return (
    <>
      <OptionHeader>
        <OptionButton
          onPress={ () => setFocused(true) } 
          focus={(focused ? onFocus : offFocus)}>
          <OptionText 
          focus={(focused ? onFocus : offFocus)}
          >Departamentos</OptionText>
        </OptionButton>
        <OptionButton 
        onPress={ () => setFocused(false) }
        focus={(!focused ? onFocus : offFocus)}>
          <OptionText
          focus={!focused ? onFocus : offFocus }
           >Sugestões</OptionText>
        </OptionButton>
      </OptionHeader>
      <Container
      >    
      {
        items.map((item)=> ( item.category === focused ? 
          
          <Option key={item.key}>
            <Img source={item.img}/>
            <Label>{item.label}</Label>
          </Option>
        :
         null
        ))

      }
      </Container>
   </>
  );
}
