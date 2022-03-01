import React, { FC, useEffect } from 'react';
import DG from '2gis-maps';
import location from 'assets/images/location-ic-hover.png';
import { StyledDiv } from 'components/ContactsSection/components/ContactSectionMap/ContactSectionMap.style';

const ContactSectionMap: FC = () => {
  useEffect(() => {
    const map = DG.map('map-container', { center: [43.236462, 76.962969], zoom: 15 });
    const icon = DG.icon({ iconUrl: location, iconSize: [20, 30], onOpen: true });
    DG.marker([43.236462, 76.962969], { icon: icon, label: 'MedVet clinic' })
      .addTo(map)
      .bindPopup('Медеуский район, г. Алматы, 050051, ул. Луганского, 54/1');

    return (): void => {
      map.remove();
    };
  }, []);

  return (
    <StyledDiv>
      <div
        id='map-container'
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </StyledDiv>
  );
};

export default React.memo(ContactSectionMap);
