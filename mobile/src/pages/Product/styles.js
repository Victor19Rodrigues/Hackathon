import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 8px;
  height: 176px;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Img = styled.Image`
  border-radius: 2px;
  width: 343px;
  height: 176px;
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  padding-left: 16px;
  justify-content: center;
  text-align: left;
  font-size: 18px;
  line-height: 21px;
`;
