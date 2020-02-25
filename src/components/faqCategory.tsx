import React, { FC } from 'react';
import styled from 'styled-components';

import { fontStyles } from '../style/fonts';
import { FaqCategoryInformationFragment } from '../../types/graphql-types';
import FaqQuestion from './faqQuestion';
import { graphql } from 'gatsby';

interface Props {
  data: FaqCategoryInformationFragment;
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
      {data.questions && data.questions.map(faq => <FaqQuestion data={faq!} />)}
    </>
  );
};

export const query = graphql`
  fragment FaqCategoryInformation on ContentfulContentFaqCategory {
    id
    internal {
      type
    }
    title
    questions {
      ...FAQInformation
    }
  }
`;

export default FaqCategory;
