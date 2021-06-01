/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Methods: FC = () => {
  const { query } = useRouter();

  return (
    <Wrapper>
      <Title>MÉTODOS DE RECARGA</Title>
      <Link
        href={{
          pathname: '/cryptomoneda',
          query: { ...query, action: 'deposit', method: 'card' },
        }}
      >
        <a>
          <Method logo="./tarjeta.svg" name="TARJETA DE CRÉDITO O DÉBITO" />
        </a>
      </Link>
      <Link
        href={{
          pathname: '/cryptomoneda',
          query: { ...query, action: 'deposit', method: 'store' },
        }}
      >
        <a>
          <Method logo="./tAutorizada.svg" name="TIENDAS AUTORIZADAS" />
        </a>
      </Link>
      <Link
        href={{
          pathname: '/cryptomoneda',
          query: { ...query, action: 'deposit', method: 'transfer' },
        }}
      >
        <a>
          <Method logo="./transfe.svg" name="TRANSFERENCIA BANCARIA" />
        </a>
      </Link>
      <Link
        href={{
          pathname: '/cryptomoneda',
          query: { ...query, action: 'deposit', method: 'deposit' },
        }}
      >
        <a>
          <Method logo="./deposito.svg" name="DEPÓSITO" />
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
  name = 'Recarga',
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

const Title = styled.div`
  font-size: 24px;
  text-align: center;
  color: #1da7ff;
`;
const TitleSub = styled.div`
  font-size: 16px;
  text-align: center;
  color: #9e9e9e;
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
  width: 400px;
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
  width: 34px;
  padding-top: 5px;
`;

export default Methods;
