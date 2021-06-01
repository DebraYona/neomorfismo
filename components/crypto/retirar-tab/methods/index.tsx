/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Methods: FC = () => {
  const { query } = useRouter();

  return (
    <Wrapper>
      <Title>MÉTODOS DE RETIRO</Title>
      <Link
        href={{
          pathname: '/cryptomoneda',
          query: { ...query, action: 'retire', method: 'card' },
        }}
      >
        <a>
          <Method logo="./tarjeta.svg" name="TARJETA DE CRÉDITO O DÉBITO" />
        </a>
      </Link>
      <Link
        href={{
          pathname: '/cryptomoneda',
          query: { ...query, action: 'retire', method: 'criptomonedas' },
        }}
      >
        <a>
          <Method logo="./criptomonedas.svg" name="CUENTAS DE CRIPTOMONEDAS" />
        </a>
      </Link>
      <Link
        href={{
          pathname: '/cryptomoneda',
          query: { ...query, action: 'retire', method: 'store' },
        }}
      >
        <a>
          <Method logo="./tAutorizada.svg" name="TIENDAS AUTORIZADAS" />
        </a>
      </Link>
    </Wrapper>
  );
};
export interface MethodFormProps {
  logo?: string;
  name?: string;
}

const Method: FC<MethodFormProps> = ({
  logo = './logo.png',
  name = 'Retiro',
}) => {
  return (
    <MethodWrapper>
      <MethodIcon>
        <ImageMethod src={logo} />
      </MethodIcon>
      <MethodButton>
        <TitleSub>{name}</TitleSub>
      </MethodButton>
    </MethodWrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  margin: auto;
`;

const TitleSub = styled.div`
  font-size: 16px;
  text-align: center;
  color: #9e9e9e;
`;
const Title = styled.div`
  font-size: 24px;
  text-align: center;
  color: #1da7ff;
`;
const MethodWrapper = styled.div`
  margin: 44px 8px 44px 8px;
  display: flex;
  flex-flow: row nowrap;
  & > div {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const MethodIcon = styled.div`
  flex: 0 0 auto;
  width: 36px;

  text-align: center;
`;
const MethodButton = styled.div`
  flex: 0 0 auto;
  width: 360px;
  padding: 12px 16px 12px 16px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  color: 99ee9e;

  &:hover {
    cursor: pointer;
  }
`;
const ImageMethod = styled.img`
  width: 30px;
  padding-top: 15px;
`;

export default Methods;
