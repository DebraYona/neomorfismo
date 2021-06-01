import { FC, useState } from 'react';
import styled from 'styled-components';
import { Input, Select } from 'antd';
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';

interface CardData {
  name: string;
  number: number;
  expiry: number;
  cvc: number;
}

const CardMethod: FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    name: 'Prueba',
    number: 4444444444444444,
    expiry: 122025,
    cvc: 777,
  });
  return (
    <Wrapper>
      <DetailsColumn>
        <StyledItem>
          <SubTitle>Cantidad</SubTitle>
          <StyledInput suffix="MXN" />
        </StyledItem>
        <StyledItem>
          <SubTitle>Recargar Monto</SubTitle>
          <StyledInput suffix="TWC" />
        </StyledItem>
        <StyledItem>
          <SubTitle>Selecciona tu wallet a recargar</SubTitle>
          <StyledSelect>
            <Select.Option value="wallet 1">
              <ImageSelect src="./logo.png" /> Wallet Personal
            </Select.Option>
          </StyledSelect>
        </StyledItem>
      </DetailsColumn>
      <CardColumn>
        <StyledCreditCardWrapper>
          <Cards {...cardData} />
        </StyledCreditCardWrapper>
        <StyledItem>
          <SubTitle>Nro. de tarjeta</SubTitle>
          <StyledInput placeholder="**** **** **** ****" />
        </StyledItem>
        <StyledItem>
          <SubTitle>Expira</SubTitle>
          <StyledInput placeholder="MM/YY" />
        </StyledItem>
        <StyledItem>
          <SubTitle>CVC</SubTitle>
          <StyledInput placeholder="CVC" />
        </StyledItem>
        <StyledCheckboxItem>
          <StyledCheckbox />
          <Checkbox>
            <ImageCheck src="checki.svg" />
          </Checkbox>
          <StyledCheckboxText>
            <SubTitle>Guardar Tarjeta</SubTitle>
          </StyledCheckboxText>
        </StyledCheckboxItem>
        <StyledItem>
          <StyledButton>
            <TitleButton> COMPRAR TWINS</TitleButton>
          </StyledButton>
        </StyledItem>
      </CardColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SubTitle = styled.div`
  margin: 4px 10px 4px 20px;
  color: #1da7ff;
  font-size: 16px;
`;
const TitleButton = styled.div`
  color: #9e9e9e;
  font-weight: 600;
  font-size: 18px;
`;
const TitleOption = styled.div`
  color: #9e9e9e;
  font-size: 16px;
  width: 200px;
`;

const CardColumn = styled.div`
  flex: 0 1 auto;
  margin: auto;
  width: 480px;
  margin-top: 16px;
`;
const ButtonSelect = styled.button`
  width: 40px;
  height: 35px;
  margin: auto ;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 10px;
  font-weight:600;
`
const ImageSelect = styled.img`
  width: 25px;
  height: 25px;
`
const DetailsColumn = styled.div`
  flex: 0 1 auto;
  margin: auto;
  width: 480px;
  margin-top: 64px;
`;
const Checkbox = styled.div`
  flex: 0 0 20px;
  display: flex;
  flex-flow: row wrap;
  border-radius: 8px;
  padding: 0px 8px 0px 8px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;

const StyledInput = styled(Input)`
  border-radius: 16px;
  padding: 12px 24px 12px 24px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;

const StyledCheckboxItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  line-height: 1.5715;

  margin: 16px 0 16px 0;
`;

const StyledCheckbox = styled.div`
  flex: 0 0 20px;
  height: 20px;

  margin-right: 12px;
`;

const StyledCheckboxText = styled.div`
  flex: 1 1 auto;
`;

const StyledSelect = styled(Select)`
  width: 100%;

  & > * {
    line-height: auto;
  }
  & > .ant-select-selector.ant-select-selector {
    border-radius: 16px;
    padding: 12px 24px 12px 24px;
    height: auto;
    box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
    .ant-select-selection-placeholder {
      line-height: 1.5715;
    }
    border: 1px solid #d9d9d9;
  }
  & > .ant-select-selector:hover {
    border: 1px solid #45beff;
  }
  & .ant-select-arrow {
    font-size: 20px;
    box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
    
    color: #9e9e9e;
  }
`;

const StyledItem = styled.div`
  margin: 8px 0 8px 0;
`;

const StyledCreditCardWrapper = styled.div`
  margin-bottom: 24px;
  .rccs__card {
    border: 3px solid #1da7ff;
  }
`;

const StyledButton = styled.button`
  display: block;
  border: 1px solid #d9d9d9;
  border-radius: 24px;
  margin-left: auto;
  line-height: 1.5715;
  padding: 8px 24px 8px 24px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
const ImageCheck = styled.img`
  width: 15px;
`;

export default CardMethod;
