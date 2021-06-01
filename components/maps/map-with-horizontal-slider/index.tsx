import { FC } from 'react';
import styled from 'styled-components';
import MapAddressCard from '../map-address-card';
import MarketplaceMap from '../marketplace-map';

const MapWithHorizontalSlider: FC = () => {
  return (
    <>
      <MarketplaceMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwW0cLuRJRwLbTtn9kqCME1KKX9Z4wWC8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `100vh`,
              borderRadius: '25px',
              overflow: 'hidden',
              marginTop: '10px',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
      <BottomSliderContainer>
        <BottomSlider>
          <MapAddressCard />
          <MapAddressCard />
          <MapAddressCard />
          <MapAddressCard />
          <MapAddressCard />
          <MapAddressCard />
          <MapAddressCard />
          <MapAddressCard />
          <FinalMargin />
        </BottomSlider>
      </BottomSliderContainer>
    </>
  );
};

// noinspection CssInvalidPropertyValue
const BottomSliderContainer = styled.div`
  background-color: #ffffff00;
  position: fixed;
  bottom: 0;
  width: fill-available;
`;

const BottomSlider = styled.div`
  width: 100%;
  padding: 0.3rem 0.3rem 0.6rem 0.3rem;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  & > * {
    margin-left: 0.45rem;
    margin-right: 0.45rem;
  }
  & > *:first-child {
    margin-left: 0.2rem;
  }
  & > *:last-child {
    margin-left: 0;
    margin-right: 0.2rem;
  }
`;

const FinalMargin = styled.div`
  min-width: 0.1px;
  height: 10px;
`;

export default MapWithHorizontalSlider;
