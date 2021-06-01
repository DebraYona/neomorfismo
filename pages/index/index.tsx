/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/display-name */
import { NextPage } from 'next';
import styled from 'styled-components';
import MainLayout from '../../components/global/layout';

const Home: NextPage = () => {
  return (
    <MainLayout title="tako" description="teki" className="container">
      <PageBody>TWINEXCHANGE</PageBody>
    </MainLayout>
  );
};

const PageBody = styled.div`
  background-color: #ffffff;
  margin: 30px;
`;

export default Home;
