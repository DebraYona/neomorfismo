import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const QrTab: FC = () => {
  return (
    <Row style={{ paddingTop: '50px' }}>
      <Col span={6}>
       <TextInfo>
            Pago con QR
        </TextInfo>
      </Col>
      <Col span={12} style={{ }}>
        
        <ContainerQR firma="****" />
        
      </Col>
    </Row>
  );
};
interface ContainerQRProps{
  firma:string;
};
const ContainerQR: FC<ContainerQRProps> =({ 
  firma= "****"        
  
}) => {
  return(
      
      <BodyWrapper>
        <Body>
          <ContainerBtnQr>
            <ImageIcono src="qrdart.svg" />
          </ContainerBtnQr>
          
         <ContainerFirma>  
         <TextInfo>
                FIRMA DIGITAL
          </TextInfo>        
           <InputFirma></InputFirma>
          </ContainerFirma>
          <ContainerBtnSubmit>
            <TextSubmit>
            FIRMA
            </TextSubmit>       
                            
          
          </ContainerBtnSubmit>
        </Body>
      </BodyWrapper>
             
      
  )
}
const ContainerTotalQr = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

`;
const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 4px 8px 4px 8px; 
  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

`;
const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
`;
const ContainerFirma = styled.div`
  margin-top:16px;
  margin-bottom:16px;
  flex: 1 0 auto;
  display: flex;
  flex-flow: column wrap;
  border-radius: 15px;
  
  align-content: center;

`;
const InputFirma = styled.input`
  width: 500px;
  height: 70px;
  border-radius: 15px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  padding-left: 60px;
  padding-right: 50px;
  font-size: 18px;
`;
const ContainerBtnQr = styled.button`
  margin-top:16px;
  margin-bottom:16px;
  width:300px;
  height: 300px;
  border-radius: 15px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const ContainerBtnSubmit = styled.button`
  margin-top:16px;
  margin-bottom:16px;
  width:300px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const ImageIcono = styled.img`
  width: 270px;
  margin:auto;
`;
const TextInfo = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 20px;
  font-weight: 600;
  align-items:center;
  margin-bottom:20px;
`;
const TextSubmit = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: auto;
`;
export default QrTab;
