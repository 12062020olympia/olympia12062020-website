import { graphql } from 'gatsby';
import React, { FC } from 'react';
import PageTitle from './pageTitle';

import { PageInformationFragment } from '../../types/graphql-types';
import ContentModule from './content';

interface Props {
  data: PageInformationFragment;
}

const PageContent: FC<Props> = ({
  data: { title, header, subheader, contentModules },
}) => {
  return (
    <>
      <PageTitle title={title} header={header} subheader={subheader} />
      {contentModules &&
        contentModules.map(contentModule => (
          <ContentModule data={contentModule!} />
        ))}
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
