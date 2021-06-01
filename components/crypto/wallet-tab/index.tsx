import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {Current} from '../main-view/currency';
import Link from 'next/link';
import { useRouter } from 'next/router';
import InfoWallet from './info-wallet';
interface WalletTabProps {
  current: Current;
  
}

const WalletTab: FC<WalletTabProps> = ({
  current ={
    clave:"TWC",
    name:"TWINCOIN",
    image:"twin.svg",    
  }
}) => {
  const { query } = useRouter();
  console.log(query);
  let currentMethod: string;

  if (Array.isArray(query.method)) {
    currentMethod = query.method[0];
  } else {
    currentMethod = query.method;
  }

  switch (currentMethod) {
    case 'info':
      return (
        <StyledRow>
          <LeftTitle>
            <TitleAction>MIS MOVIMIENTOS</TitleAction>            
          </LeftTitle>
          <Col span={24} >
            <InfoWallet current={current} />
          </Col>
        </StyledRow>
      );
    default:
      return (
        <Row style={{ paddingTop: '50px' }}>
          <Col span={6}>
          <TextInfo>
                MONEDERO {current.name}
            </TextInfo>
          </Col>
          <Col span={12} style={{ }}>
            <WalletList image={current.image} name="New Wallet" saldo="1321" clave={current.clave}/>        
            <WalletList image={current.image} name="New Wallet" saldo="1321" clave={current.clave}/>        
            <WalletList image={current.image} name="New Wallet" saldo="1321" clave={current.clave}/>        
            <WalletList image={current.image} name="New Wallet" saldo="1321" clave={current.clave}/>        
          </Col>
        </Row>
      );
}
};
interface WalletListProps {
  image: string;
  name: string;
  saldo: string;
  clave : string;
}
const  WalletList: FC<WalletListProps> = ({
  image = 'twin.svg',
  name = 'New wallet',
  saldo = '0',
  clave = "TWC"
}) => {
  const { query } = useRouter();
  return (
    <WalletListContainer>      
      <BodyWrapper>
      <ImageCoin src={image} />
        <Body>           
            <BodyWallet>
             <InfoCoin>{name}</InfoCoin>
             <Infowallet>{clave}</Infowallet>
            </BodyWallet>
            <BodySaldo>
             <InfoCoin>saldo disponible:</InfoCoin>
              <InfoSaldo> {saldo}</InfoSaldo>
            </BodySaldo>
          </Body> 
          <Link
              href={{
                pathname: '/cryptomoneda',
                query: { ...query, action: 'wallet', method: 'info' },
              }}
            >
            <Info>
              <ImageInfo src="./info.svg" />            
            </Info>
          </Link>
          <Delete>
            <ImageDelete src="./trash.svg" />
          </Delete>  
      </BodyWrapper>
    </WalletListContainer>

  );
};
const WalletListContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 24px;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin: 4px 8px 10px 8px;
  justify-content: space-between;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const BodyWallet = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  padding-left: 16px;
  padding-right: 16px;
`;
const BodySaldo = styled.div`
  justify-content: space-between;
  flex: 0 1 auto;
  display: flex;
  flex-flow: column wrap;
  padding-left: 16px;
  padding-right: 16px;
`;
const InfoCoin = styled.div`
  flex: 1 0 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 16px;
`;
const InfoSaldo = styled.div`
  flex: 0 1 auto;
  color: #5E6166;
  
  font-size: 16px;
  display: inline-block;
  text-align: right;
`;
const Infowallet = styled.div`
  flex: 0 1 auto;
  color: #9e9e9e;
  
  font-size: 16px;
  display: inline-block;
  text-align: left;
`;
const TextInfo = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 20px;
  font-weight: 600;
  align-items:center;
`;
const ImageCoin = styled.img`
  width: 50px;
  height: 50px;
  margin: auto;
  
`;
const Info = styled.button`
  flex: 0 0 auto;
  align-self: flex-end;
  text-align: center;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  margin-bottom: 8px;  
  padding:4px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  && {
    padding-top: 4px;
  }
`;
const Delete = styled.button`
  flex: 0 0 auto;
  align-self: flex-end;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  margin-bottom: 8px;
  margin-right: 10px;
  margin-left: 10px;
  padding:4px;

  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  && {
    padding-top: 4px;
  }
`;
const ImageInfo = styled.img`
  width: 15px;
  padding-bottom:4px;
`;
const ImageDelete = styled.img`
  width: 25px;
  display: block;
  margin: auto;
`;
const StyledRow = styled(Row)`
  position: relative;
`;

const LeftTitle = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 25px;
`;
const TitleAction = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 25px;
`;
const TitleSub = styled.div`
  flex: 1 1 auto;
  color: #1da7ff;
  font-size: 16px;
`;
export default WalletTab;
