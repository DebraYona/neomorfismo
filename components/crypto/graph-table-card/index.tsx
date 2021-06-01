import styled from 'styled-components';
import { FC, useState } from 'react';
import { Row, Button } from 'antd';
import TwinTab from 'components/global/twin-tab';
import MyResponsiveLine from '../crypto-line-chart';
import ResponsiveTable from '../responsive-table';
import { Current } from '../main-view/currency';

const CHART_VIEW = 0;
const TABLE_VIEW = 1;
interface TabProps {
  current: Current;
  
}
const GraphTableCard: FC<TabProps> = ({ 
  current ={
    clave:"TWC",
    name:"TWINCOIN",
    image:"twin.svg",    
  }
}) => {
  const [currentView, setCurrentView] = useState<number>(CHART_VIEW);

  const setChartView = () => setCurrentView(CHART_VIEW);
  const setTableView = () => setCurrentView(TABLE_VIEW);

  const tabs = [
    {
      key: CHART_VIEW,
      title: 'ESTADISTICAS',
      onClick: setChartView,
    },
    {
      key: TABLE_VIEW,
      title: 'HISTORIAL DE TRADE',
      onClick: setTableView,
    },
  ];
 
  return (
    <Container>
      <ContainerHeader>
        <CurrentLogo current ={current}/>
        <SelectorContainer>          
          <TwinTab tabs={tabs} currentView={currentView} />
        </SelectorContainer>
      </ContainerHeader>
      <Row>
        <ElementContainer>
          {currentView === CHART_VIEW && <MyResponsiveLine />}
          {currentView === TABLE_VIEW && <ResponsiveTable />}
        </ElementContainer>
      </Row>
    </Container>
  );
};
interface currentProps {
  current: string;
  image: string;

}
const CurrentLogo: FC<TabProps> = ({
  current ={
    clave:"TWC",
    name:"TWINCOIN",
    image:"twin.svg",    
  }
}) => {
  return (
    <>
      <ImgStyle src={current.image}/>
      <NameCurrent>{current.name}</NameCurrent>
    </>
  )
}

const Container = styled.div`
  padding: 8px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  overflow: hidden;
`;

const ElementContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const SelectorContainer = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: end;
`;
const ImgStyle = styled.img`
  width: 40px;
  margin-right: 12px;

`;
const ContainerHeader = styled.div`
    width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin: 4px 8px 4px 8px;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;
const NameCurrent = styled.div`
  margin:auto;
  color: #9e9e9e;
  font-size: 18px;
`;

export default GraphTableCard;
