import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { SpecialContentInformationFragment } from '../../../types/graphql-types';
import ContactForm from './contactForm';
import RecentNews from './recentNews';

interface Props {
  data: SpecialContentInformationFragment;
}

const SpecialContent: FC<Props> = ({ data }) => {
  if (data.slug === 'contactForm') {
    return <ContactForm />;
  }

  if (data.slug === 'recentNews') {
    return <RecentNews />;
  }

  return null;
};

export const query = graphql`
  fragment SpecialContentInformation on ContentfulSpecialContent {
    id
    slug
    internal {
      type
    }
  }
`;

export default SpecialContent;
