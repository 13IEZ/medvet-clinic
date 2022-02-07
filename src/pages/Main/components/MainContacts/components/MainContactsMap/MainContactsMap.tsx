import React, { FC, useEffect } from 'react';
import DG from '2gis-maps';
import location from 'assets/images/location-ic-hover.png';
import { StyledDiv } from 'pages/Main/components/MainContacts/components/MainContactsMap/MainContactsMap.style';

const MainContactsMap: FC = () => {
  useEffect(() => {
    const map = DG.map('map-container', { center: [43.236462, 76.962969], zoom: 16 });
    const icon = DG.icon({ iconUrl: location, iconSize: [20, 30] });
    DG.marker([43.236462, 76.962969], { icon: icon, label: 'MedVet clinic' })
      .addTo(map)
      .bindPopup('le4im gnilie o4ka');

    return (): void => {
      map.remove();
    };
  }, []);

  return (
    <StyledDiv>
      <div
        id='map-container'
        style={{
          width: `100%`,
          height: '100%',
        }}
      />
    </StyledDiv>
  );
};

export default React.memo(MainContactsMap);
