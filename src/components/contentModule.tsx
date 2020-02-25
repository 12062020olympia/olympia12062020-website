import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { FaqCategoryInformationFragment } from '../../types/graphql-types';
import FaqCategory from './faqCategory';

interface Props {
  data: FaqCategoryInformationFragment;
}

const ContentModule: FC<Props> = ({ data }) => {
  return (
    <>
      {data.internal.type === 'ContentfulContentFaqCategory' && (
        <FaqCategory data={data} />
      )}
    </>
  );
};

export const query = graphql`
  fragment ContentModuleInformation on ContentfulPage {
    contentModules: contentModule {
      ...FaqCategoryInformation
    }
  }
`;

export default ContentModule;
