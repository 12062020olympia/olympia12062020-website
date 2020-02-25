import { graphql } from 'gatsby';
import React, { FC } from 'react';
import PageTitle from './pageTitle';

import { PageInformationFragment } from '../../types/graphql-types';
import ContentModule from './contentModule';

interface Props {
  data: PageInformationFragment;
}

const PageContent: FC<Props> = ({
  data: { title, headline, subheader, contentModules },
}) => {
  return (
    <>
      <PageTitle title={title} header={headline} subheader={subheader} />
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
    headline
    subheader
    slug
    ...ContentModuleInformation
  }
`;

export default PageContent;
