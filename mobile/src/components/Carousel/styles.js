import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
    alignItems: 'center',
    paddingLeft: 16,
    }
}))`
    background: tomato;
    height: 225px;
    margin-top:20px;
    
`;

export const Option = styled.TouchableOpacity`
    width: 400px;
    margin-right:16px;
    align-items:center;`;

export const Label = styled.Text`
    color: #000;
    font-weight:700;
    margin-top:8px;
    font-size:12px;
    flex-wrap:nowrap;
    text-align:center;`;

export const Img = styled.Image``;
