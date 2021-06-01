import { FC } from 'react';
import styled from 'styled-components';

interface TwinTabProps {
  tabs: ITab[];
  currentView: number;
}

interface TabProps {
  key?: number;
  onClick: () => void;
  isCurrent: boolean;
}

interface ITab {
  key?: number;
  title?: string;
  onClick: () => void;
}

const TwinTab: FC<TwinTabProps> = ({ tabs = [], currentView = 0 }) => {
  return (
    <Container>
      {tabs?.map((tab: ITab) => (
        <Tab
          key={tab.key}
          onClick={tab.onClick}
          isCurrent={currentView === tab.key}
        >
          {tab.title}
        </Tab>
      ))}
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 12px;
  padding: 16px 12px 16px 12px;
  display: flex;
  & > * {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const Tab = styled.div<TabProps>`
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  min-width: 160px;
  text-align: center;
  cursor: pointer;
  ${({ isCurrent }) =>
    isCurrent &&
    `
    box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  `}
`;

export default TwinTab;
