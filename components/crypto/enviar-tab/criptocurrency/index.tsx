import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const CriptoCurrency: FC = () => {
  return (
    <ContainerAuthorizedStores >
      
      <div  style={{ flex:" 0 0 auto", width: '800px' }}>
        <TextInfo>
            DEPOSITAR CON SPEI
        </TextInfo>
        <Containerwallet>
          <ContainerSpei banco="12385858712312" beneficiario="23123147672312" />
          
        </Containerwallet>
      </div>
      <div style={{ flex:" 0 0 auto", width: '500px' }}>
        <ContainerInfo qr="15794usvnfm3498j29mcerg3fe5456856748"></ContainerInfo>
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
				<ContainerMonederos monederos="monedita"/>	
				<ContainerMonederos monederos="monedita"/>	
				<ContainerMonederos monederos="monedita"/>	
				<ContainerMonederos monederos="monedita"/>		 	
				<ContainerMonederos monederos="monedita"/>
       
    </>
  );
};
const ContainerAnuncio: FC = () => {
  return (
    <BodyInfo>
      <TitleInfo>ENVÍOS LOCALES Y EXTERNOS</TitleInfo>

      <TextInfoA>
      Dirección de la cuenta de criptomonedas

      </TextInfoA>
               
    </BodyInfo>
  );
};
interface ContainerQrInfoProps {
  qr: string;
}

const ContainerInfo: FC<ContainerQrInfoProps> = ({
  qr = '564645745325561',
}) => {
  return (
    <BodyWrapper>
      <BodyInfo>
        <TitleCompartir>ENVÍOS LOCALES Y EXTERNOS</TitleCompartir>

        <TextInfoA>
        Dirección de la cuenta de criptomonedas
        </TextInfoA>
        <BodyRecarga>
          <BodyC>        
            <InfoCoin>{qr}</InfoCoin>                          
          </BodyC>  
          <Share><ImageShare src="./copiar.svg"  /> </Share>          
        </BodyRecarga>  
        <ButtonEnviar>ENVIAR TWINS</ButtonEnviar>   
      </BodyInfo>
      
      
      
         
    </BodyWrapper>
  );
};
const ImageShare = styled.img`
  width: 20px;
  display: block;
  margin: auto;
`;
const Share = styled.button`
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
const ContainerAuthorizedStores = styled.div`
	display: flex;
  flex-flow: row wrap;
  align-items: center;

`;
const ContainerQr = styled.div`
	display: flex;
  flex-flow: row wrap;
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
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 4px 8px 4px 8px;
  border-radius: 15px;

  & > div {
    
    
  }
`;
const TitleInfo =styled.div`
  flex: 1 1 auto;
  color: #3395FF;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 18px;
  margin-top:16px;
  margin-bottom:50px;

`;
const TitleCompartir =styled.div`
  flex: 1 1 auto;
  color: #3395FF;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 18px;
  margin: auto;
  margin-bottom:50px;

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
  margin-left:16px;
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
  width: 200px;
  height: 60px;
  margin: 70px auto 10px auto;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  font-weight:600;
  color: #9e9e9e;
  font-size: 20px;
`


const Containerwallet = styled.div`
 margin: auto;
 padding-top:20px;
 padding-right: 100px;

`;

const Message = styled.div`
  margin-top: 24px;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const ImageCoin = styled.img`
  width: 50px;
  height: 50px;
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
  margin-bottom: 36px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const BodyC = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
  margin-bottom: 36px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  margin: auto;
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
	export default CriptoCurrency;
