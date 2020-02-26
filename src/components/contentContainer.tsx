import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { ContentContainerInformationFragment } from '../../types/graphql-types';
import { fontStyles } from '../style/fonts';
import ContentBlock from './contentBlocks/contentBlock';

interface Props {
  data: ContentContainerInformationFragment;
}

const Container = styled.div`
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.11);
  padding: 48px 0 15px 0;
`;

const CategoryHeadline = styled.h4`
  ${fontStyles.smallHeadline}
`;

const FaqCategory: FC<Props> = ({ data }) => {
  return (
    <>
      <Container>
        <CategoryHeadline>{data.title}</CategoryHeadline>
      </Container>
      {data.contentModules &&
        data.contentModules.map(c => <ContentBlock data={c!} />)}
    </>
  );
};

export const query = graphql`
  fragment ContentContainerInformation on ContentfulContentContainer {
    title
    internal {
      type
    }
    contentModules {
      ...ContentBlockInformation
    }
  }
`;

export default FaqCategory;
