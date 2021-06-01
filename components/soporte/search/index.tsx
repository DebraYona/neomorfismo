import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Button, Card, Col, Input, Typography, Row } from 'antd';
import { CardProps } from 'antd/lib/card';
import { SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;

const Search: FC = () => {
  return (
    <ContainerSearch>
      <div style={{ margin: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <StyledText>¿En qué te podemos ayudar?</StyledText>
        </div>
        <div>
          <StyledSearch
            placeholder="Escribe aquí lo que estas buscando..."
            suffix={<SearchOutlined color="#1da7ff" />}
          />
        </div>
      </div>
    </ContainerSearch>
  );
};

const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const StyledSearch = styled(Input)`
  & .ant-input {
    border: 1px solid #ddd;
  }
  border-radius: 15px;
  box-shadow: 5px 10px 5px #eeeeee;
  width: 400px;
  height: 50px;
  margin-top: 8px;
  border-color: #ffffff;
`;
const StyledText = styled(Text)`
  & .ant-typography {
    width: 200px;
    border: 1px solid #ddd;
    padding-bottom: 8px;
    margin: auto;
  }
  font-size: 18px;
`;

export default Search;
