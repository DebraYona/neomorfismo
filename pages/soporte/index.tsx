import { NextPage } from 'next';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MainLayout from '../../components/global/layout';
import TabButton from '../../components/transaction/tabsButton';
import Search from '../../components/soporte/search';
import Iconos from '../../components/soporte/soporte';
import ButtonRedesSociales from '../../components/redes-sociales';

const Soporte: NextPage = () => {
  return (
    <MainLayout title="Soporte" description="Soporte">
      <SoporteContainer>
        <NoSSR>
          <Search />
          <StyledSeparator />
          <Iconos />
          <StyledSeparator />
          <ButtonRedesSociales />
        </NoSSR>
      </SoporteContainer>
    </MainLayout>
  );
};

const StyledSeparator = styled.div`
  height: 80px;
`;

const SoporteContainer = styled.div`
  padding: 2.5rem 1.8rem 1rem 1.8rem;
  justify-content: center;
  align-items: center;
`;
const StyleTabButton = styled(TabButton)`
 & .ant-card-
  padding: 1rem 1rem 1rem 1.8rem;
  margin: 50px;
`;
export default Soporte;
