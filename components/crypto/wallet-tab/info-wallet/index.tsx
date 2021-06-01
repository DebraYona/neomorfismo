import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {Current} from '../../main-view/currency';
import DataWallet from './card-wallet';

interface InfoWalletProps {
  current: Current;
  
}
const InfoWallet: FC<InfoWalletProps> = ({
  current ={
    clave:"TWC",
    name:"TWINCOIN",
    image:"twin.svg",
  }
}) => {
  console.log("current",current.name)
  return (
    <Row style={{ paddingTop: '0px' }}>    
      <Col span={12} style={{ }}>
        <WalletList image={current.image} tipo="Compra" clave={current.clave}/>        
        <WalletList image={current.image} tipo="Venta " clave={current.clave}/>        
        <WalletList image={current.image} tipo="Envio"  clave={current.clave}/>        
        <WalletList image={current.image} tipo="Entradas" clave={current.clave}/>        
      </Col>
			<Col span={8}>
			<DataWallet current={current} />
			</Col>
    </Row>
  );
};
interface WalletListProps {
  image: string;
  tipo: string;
  clave: string;
}
const  WalletList: FC<WalletListProps> = ({
  image = 'twin.svg',
  tipo = 'Compra',
  clave = 'New wallet',
}) => {
  return (
    <WalletListContainer>      
      <BodyWrapper>
      <ImageCoin src={image} />
        <Body>
					<InfoCoin>{tipo}</InfoCoin>
					<InfoFecha>10/05/2020</InfoFecha>
					<InfoSaldo>{clave} 10</InfoSaldo>                 
        </Body>          
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
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 16px;
`;
const InfoFecha = styled.div`
  flex: 1 0 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-size: 16px;
`;
const InfoSaldo = styled.div`
  flex: 0 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-size: 16px;
	font-weight:600;
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
export default InfoWallet;
