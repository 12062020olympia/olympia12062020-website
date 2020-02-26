import React, { FC } from 'react';
import { graphql } from 'gatsby';

import {
  ContentCopyInformationFragment,
  FaqCategoryInformationFragment,
} from '../../types/graphql-types';
import ContentCopy from './contentCopy';
import FaqCategory from './faqCategory';

interface Props {
  data: FaqCategoryInformationFragment | ContentCopyInformationFragment;
}

const ContentModule: FC<Props> = ({ data }) => {
  console.log(data);
  if (!data.internal) {
    return null;
  }
  return (
    <>
      {data.internal.type === 'ContentfulContentFaqCategory' && (
        <FaqCategory data={data as FaqCategoryInformationFragment} />
      )}
      {data.internal.type === 'ContentfulContentCopy' && (
        <ContentCopy data={data as ContentCopyInformationFragment} />
      )}
    </>
  );
};

export const query = graphql`
  fragment ContentModuleInformation on ContentfulPage {
    contentModules {
      ...FaqCategoryInformation
      ...ContentCopyInformation
    }
  }
`;

export default ContentModule;
