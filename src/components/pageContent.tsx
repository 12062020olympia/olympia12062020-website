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
  data: { title, header, subheader, contentModules },
}) => {
  return (
    <>
      <PageTitle title={title} header={header} subheader={subheader} />
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
    subheader
    slug
    ...ContentInformation
  }
`;

export default PageContent;
