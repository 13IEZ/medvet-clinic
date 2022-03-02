import React, { FC } from 'react';
import { StyledContainer, StyledSectionTitle } from 'style/style';
import { StyledContactsHolder } from 'components/ContactsSection/ContactsSection.style';
import ContactsSectionInfo from 'components/ContactsSection/components/ContactsSectionInfo/ContactsSectionInfo';
import ContactSectionMap from 'components/ContactsSection/components/ContactSectionMap/ContactSectionMap';

const ContactsSection: FC = () => {
  return (
    <section>
      <StyledContainer maxWidth={false} width='91.25rem' sx={{ marginBottom: '10rem' }}>
        <StyledSectionTitle sx={{ margin: '5rem 0 5rem', textAlign: 'center' }}>
          Контакты
        </StyledSectionTitle>

        <StyledContactsHolder container justifyContent='space-between' alignItems='center'>
          <ContactsSectionInfo />
          <ContactSectionMap />
        </StyledContactsHolder>
      </StyledContainer>
    </section>
  );
};

export default ContactsSection;
