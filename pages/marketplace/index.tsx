import { NextPage } from 'next';
import NoSSR from 'react-no-ssr';
import MainLayout from '../../components/global/layout';
import MapWithHorizontalSlider from '../../components/maps/map-with-horizontal-slider';

const Marketplace: NextPage = () => {
  return (
    <MainLayout title="Marketplace" description="Marketplace">
      <NoSSR>
        <MapWithHorizontalSlider />
      </NoSSR>
    </MainLayout>
  );
};

export default Marketplace;
