import { graphql } from 'gatsby';
import React, { FC } from 'react';

import { PictureContentBlockInformationFragment } from '../../../types/graphql-types';

interface Props {
  data: PictureContentBlockInformationFragment;
}

const PictureContentBlock: FC<Props> = ({ data }) => {
  return (
    <p>PictureContentBlock</p>
  );
};

export const query = graphql`
  fragment PictureContentBlockInformation on ContentfulContentBlock {
    richText: content {
      json
    }
    slug
    title
    pictureW260: picture {
      fluid(maxWidth: 260) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

export default PictureContentBlock;
