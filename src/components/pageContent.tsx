import { graphql } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';

import { PageInformationFragment } from '../../types/graphql-types';
import { contentPadding } from '../style/dimensions';
import ContentModule from './content';
import PageTitle from './pageTitle';

interface Props {
  data: PageInformationFragment;
}

const ContentContainer = styled.div`
  > * {
    margin: 0 ${contentPadding};
  }
`;

const PageContent: FC<Props> = ({
  data: { title, header, contentModules, backgroundPicture },
}) => {
  return (
    <>
      <PageTitle
        title={title}
        header={header}
        backgroundPicture={backgroundPicture!}
      />
      <ContentContainer>
        {contentModules &&
          contentModules.map(contentModule => (
            <ContentModule data={contentModule!} />
          ))}
      </ContentContainer>
    </>
  );
};

export const query = graphql`
  fragment pageInformation on ContentfulPage {
    title
    header
    slug
    backgroundPicture {
      fluid(maxHeight: 760) {
        ...GatsbyContentfulFluid
      }
    }
    ...ContentInformation
  }
  fragment GatsbyContentfulFluid on ContentfulFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;

export default PageContent;
