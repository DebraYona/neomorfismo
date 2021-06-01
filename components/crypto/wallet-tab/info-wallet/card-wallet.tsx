import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import {Current} from '../../main-view/currency';

interface InfoWalletProps {
  current: Current;
  
}
const DataWallet: FC<InfoWalletProps> = ({
  current ={
    clave:"TWC",
    name:"TWINCOIN",
    image:"twin.svg",
  }
}) => {
  console.log("current",current.name)
  return (           
        <WalletCard image={current.image} tipo="Compra" saldo="1321" clave={current.clave}/>     
  );
};
interface WalletListProps {
  image: string;
  tipo: string;
  saldo: string;
  clave: string;
}
const  WalletCard: FC<WalletListProps> = ({
  image = 'twin.svg',
  tipo = 'Compra',
  saldo = '0',
  clave = "TWC"
}) => {
  return (
    <WalletListContainer>      
      <BodyWrapper>
      
        <BodyColumn1>
          <BodyWallet>
          <InfoCoin>Nombre del monedero</InfoCoin>
		      <InfoDescription>{clave} caja chica</InfoDescription>
          </BodyWallet>
          <BodyAction>
          <Delete>
            <ImageDelete src="./copiar.svg" />
          </Delete>  
          <Delete>
            <ImageDelete src="./compartir.svg" />
          </Delete>  
          </BodyAction>		                     
        </BodyColumn1>
        <BodyColumn2>
          <BodyWallet>
            <InfoCoin>Moneda</InfoCoin>
            <InfoDescription>{clave} </InfoDescription>
          </BodyWallet>
          <BodyWallet>
            <InfoCoin>ID</InfoCoin>
            <InfoDescription>0090</InfoDescription>
          </BodyWallet>
          <BodyWallet>
            <InfoSaldo>Saldo</InfoSaldo>
            <SaldoDescription>t4,600</SaldoDescription>
          </BodyWallet>
        </BodyColumn2> 
        <BodyColumn3>
          <BodyWallet>
            <InfoCoin>Código QR</InfoCoin>
            <ImageCoin src="qrdart.svg" />
          </BodyWallet>
        
        </BodyColumn3>   
        <BodyColumn4>
          <BodyWallet>
            <InfoCoin>Dirección de la cuenta de criptomonedas</InfoCoin>
            <InfoDescription>15794usvnfm3498j29mcerg3fe5456856748</InfoDescription>
          </BodyWallet>        
        </BodyColumn4> 
        <BodyColumn5>
         <Body>
         <InfoCoin><ImageInfo src={image} /></InfoCoin>
          <InfoDescription>t. 10</InfoDescription>
          <InfoClave>{clave}</InfoClave>
          <StyledHr />
          <InfoCoin><ImageInfo src="mxnc.svg" /></InfoCoin>
          <InfoDescription>$. 20</InfoDescription>
          <InfoClave>MXN</InfoClave>

        </Body>     
        </BodyColumn5>      
          
      </BodyWrapper>
    </WalletListContainer>

  );
};

const WalletListContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 44px;
  margin-left: 30px;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 20px 8px 20px 8px;
  justify-content: space-between;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 15px;
  padding: 10px 0  10px 0;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const BodyColumn1 = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 5px 0px 5px 0px;
`;
const BodyColumn2 = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 5px 0px 5px 0px;
`;
const BodyColumn3 = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 5px 0px 5px 0px;
`;
const BodyColumn4 = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 5px 0px 5px 0px;
`;
const BodyColumn5 = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  
  padding-left: 16px;
  padding-right: 16px;
`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  margin: 5px; 
  padding: 14px 16px 14px 16px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 15px;
`;
const BodyWallet = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  padding-left: 16px;
  padding-right: 16px;
`;
const BodyAction = styled.div`
  justify-content: space-between;
  flex: 0 1 auto;
  display: flex;
  flex-flow: row wrap;
  padding-left: 16px;
  padding-right: 16px;
	
`;
const InfoCoin = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 14px;
`;
const InfoDescription = styled.div`
  flex: 1 0 auto;
  color: #444444;
  display: flex;
  align-items: center;
  font-size: 16px;
  
`;
const InfoSaldo = styled.div`
  flex: 0 1 auto;
  color: #9e9e9e;
  display: flex;  
  font-size: 16px;
	font-weight:600;
  display: inline-block;
  text-align: center;
`;
const SaldoDescription = styled.div`
  flex: 1 0 auto;
  color: #444444;
  display: flex;
  
  font-size: 16px;
  display: inline-block;
  text-align: center;
`;
const InfoClave = styled.div`
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
  width: 70px;
  height: 70px;
  margin-left:10px;
  margin-top:10px;
  
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
  width: 30px;
  padding-bottom:4px;
`;
const ImageDelete = styled.img`
  width: 20px;
  display: block;
  margin: auto;
`;
const StyledHr =styled.hr`
		width: 100%;  
		border: 1px solid #3395FF;
		margin: auto;
    border-radius: 15px;
    margin-top: 4px;
    margin-bottom: 4px;
		
  `;
export default DataWallet;
