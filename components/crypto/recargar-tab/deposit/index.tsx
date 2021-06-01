import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const Deposit: FC = () => {
  return (
    <ContainerAuthorizedStores >
      <div style={{ flex:" 0 0 auto", width: '400px', padding:"20px" }}>
        <ContainerInfo />
      </div>
      <div  style={{ flex:" 0 0 auto", width: '800px' }}>
        <TextInfo>
            DEPOSITAR CON SPEI
        </TextInfo>
        <Containerwallet>
          <ContainerSpei banco="12385858712312" beneficiario="23123147672312" />
          
        </Containerwallet>
      </div>
      <div style={{ flex:" 0 0 auto", width: '500px' }}>
        <ContainerQrInfo qr="15794usvnfm3498j29mcerg3fe5456856748"></ContainerQrInfo>
      </div>
    </ContainerAuthorizedStores>
  );
};
interface monedero{
    nombre : string,
    cantidad: number

};
interface ContainerMonederosProps{
    monederos:string;
};
const ContainerMonederos: FC<ContainerMonederosProps> =({ 
monederos= "monedita"        
    
}) => {
    return(
      <>        
        <BodyM>
          <ImageCoinM src="twin.svg" />
          <BodyCoin>
            <InfoCoin>Peso mexicano</InfoCoin>            
          </BodyCoin>
          <CuantityCoin> t. 500</CuantityCoin>
          <StyledCheckboxItem>
          
            <StyledCheckbox>
              <ImageCheck src="checki.svg" />
            </StyledCheckbox>							
          </StyledCheckboxItem>
        </BodyM>       
      </>
    )
}
interface ContainerRecargaProps{
	monederos:string;
};
const ContainerRecarga: FC<ContainerRecargaProps> =({ 
monederos= "monedita"

}) => {
	return(
			<>
      <Type>Ingresar monto a recargar </Type>
			<ContainerCambio>
				<BodyA>
					<ImageCoinM src="mxnc.svg" />
					<BodyCoin>
						<InfoCoin>Peso mexicano</InfoCoin>            
					</BodyCoin>
						<CuantityCoin> t. 500</CuantityCoin>
            <TextCoin>MXN</TextCoin>
				</BodyA> 
				<StyledHr />
				<BodyA>
					<ImageCoinM src="twin.svg" />
					<BodyCoin>
						<InfoCoin>Peso mexicano</InfoCoin>            
					</BodyCoin>
						<CuantityCoin> t. 500</CuantityCoin>	
            <TextCoin>TWC</TextCoin>				
				</BodyA> 
						
			</ContainerCambio>
		
			
			</>
	)
}
interface ConteinerSpeiProps {
  banco: string;
  beneficiario: string;
}

const ContainerSpei: FC<ConteinerSpeiProps> = ({
  banco = '564645745325561',
  beneficiario = '123123123123123',
}) => {
  return (
    <>
      <ContainerOrder>
      <Type>MONEDERO A RECARGAR</Type>
				<ContainerMonederos monederos="monedita"/>	
				<ContainerMonederos monederos="monedita"/>	
				<ContainerMonederos monederos="monedita"/>	
				<ContainerMonederos monederos="monedita"/>	
				 <ContainerRecarga monederos="monedita"/>	
      </ContainerOrder>
    
      <Row>
        <ButtonEnviar>
         GENERAR ORDEN DE COMPRA
        </ButtonEnviar>
      </Row>
    </>
  );
};
const ContainerInfo: FC = () => {
  return (
    <BodyInfo>
      <TitleInfo>SELECCIONA EL BANCO<br></br>
          A DEPOSITAR
      </TitleInfo>
      <ContainerBank>
      <ImageBank src="bbva.png" />
      </ContainerBank>
      <ContainerBank>
      <ImageBank src="santander.png" />
      </ContainerBank>
      <ContainerBank>
      <ImageBank src="bbva.png" />
      </ContainerBank>
      <ContainerBank>
      <ImageBank src="bbva.png" />
      </ContainerBank>
    </BodyInfo>
  );
};
interface ContainerQrInfoProps {
  qr: string;
}

const ContainerQrInfo: FC<ContainerQrInfoProps> = ({
  qr = '564645745325561',
}) => {
  return (
    <ContainerQr>
     
      <TextInfoA>Deposita a tu cuenta de Twinbusiness con <br></br>
        efectivo en cualquier BANCOMER del país, solo  <br></br>
        muestra estecódigo QR al cajero.        
      </TextInfoA>
      <TextInfoA>
      Tu código de depósitoes único y siempre <br></br>
      será el mismo.
      </TextInfoA>
      <ImageIcono src="./qrdart.svg" />
      <TextInfoA>
      {qr}
      </TextInfoA> 
      <ContainerDepo>
      <TextInfoA>
      IMPORTANTE
      </TextInfoA> 
      <TextInfoA>
      Depósito sin límite
      </TextInfoA>
      </ContainerDepo>    
    </ContainerQr>
  );
};

const ContainerAuthorizedStores = styled.div`
	display: flex;
  flex-flow: row wrap;
  align-items: center;

`;
const ContainerQr = styled.div`
	display: flex;
  flex-flow: column wrap;
  margin: auto;

`;
const ContainerOrder = styled.div`
	box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  width: 100%;
  padding: 10px 20px 20px 20px;

`;
const ContainerCambio = styled.div`
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 15px;
  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const BodyInfo = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
  margin: 4px 8px 4px 8px;
  border-radius: 15px;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const TitleInfo =styled.div`
  flex: 1 1 auto;
  color: #999999;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 16px;
  margin: auto;
  margin-top:16px;
  margin-bottom:16px;
  

`;
const TextInfoA =styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 12px;
  text-align: center;
  margin: auto;
  margin-top:8px;
  margin-bottom:4px;
`;
const TextInfoB =styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 12px;
  
  margin: auto;
  margin-top:8px;
  margin-bottom:4px;
`;
const TextGuion =styled.span`  
  color: #3395FF;  
  font-weight:600;
  font-size: 30px;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin: 4px 8px 4px 8px;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const BodyRecarga = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin: 4px 8px 4px 8px;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const ImageIcono = styled.img`
  width: 150px;
  margin: auto;
  margin-top:12px;
  margin-bottom:12px;  
`;
const Title = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 20px;
`;
const Stp = styled.div`
  margin: 12px 20px 4px 30px;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
`;
const Type = styled.div`
  margin: 12px 30px 4px 30px;
  color: #9e9e9e;
  font-size: 18px;
  margin-right: auto;
`;
const TextInfo = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 20px;
  font-weight: 600;
  align-items:center;
`;
const ButtonEnviar = styled.button`
  width: 400px;
  height: 60px;
  margin: 40px auto 10px auto;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  font-weight:600;
  color: #9e9e9e;
  font-size: 20px;
`;

const Containerwallet = styled.div`
 margin: auto;
 padding-top:20px;
 padding-right: 100px;
`;

const ContainerBank = styled.button`
  margin-top: 24px;
  height:60px;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const ImageBank = styled.img`
 width:150px;
 margin:10px auto 10px auto;
`;
const ImageCoinM = styled.img`
	
  width: 30px;
  height: 30px;
  margin:  auto;
`;
const InfoCoin = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 16px;
`;
const CuantityCoin = styled.div`
  flex: 0 0 180px;
  color: #9e9e9e;
  display: flex;
  align-items: center; 
  font-size: 16px;
`;
const BodyMonedero = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 4px 8px 4px 8px;
	border: 1px solid #eeeeee;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const BodyM = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;

`;
const BodyA = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
`;

const BodyCoin = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledCheckboxItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  line-height: 1.5715;

  margin: 8px 0 8px 0;
`;
const StyledCheckbox = styled.button`
  flex: 0 0 30px;
  height: 28px;
	border-radius: 8px;
  padding: 0px 4px 0px 4px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  margin-right: 30px;
`;
const ContainerDepo = styled.div`
  margin:auto;
  margin-top:20px;
  margin-bottom:16px;
  width: 300px;
  height: 100px;
  flex: 0 0 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0px 8px 0px 8px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const ImageCheck = styled.img`
  width: 16px;
	margin: auto;
`;
const StyledHr =styled.hr`
		width: 98%;  
		border: 1px solid #3395FF;
		margin: auto;
    border-radius: 15px;
		
  `;
const TextCoin = styled.div`
  flex: 0 0 20px;
  color: #9e9e9e;
  font-size: 16px;
  
  align-items:center;
  margin-right: 15px;
`;
const ImageOxxo = styled.img`
  width: 100px;
	margin: 10px auto 10px auto;
  
`;
const ContainerList = styled.ul``;
const InfoLi = styled.li`
  margin-top:24px;
  margin-bottom:20px;
  color: #3395FF;  
`;

export default Deposit;
