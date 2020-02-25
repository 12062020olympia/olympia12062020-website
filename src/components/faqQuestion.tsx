import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FaqInformationFragment } from '../../types/graphql-types';
import ContentfulRichText from './contentfulRichText';
import { graphql } from 'gatsby';

interface Props {
  data: FaqInformationFragment;
}

const Container = styled.div`
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.11);
  padding: 24px 0;
`;

export const FaqQuestion: FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div onClick={() => setIsOpen(!isOpen)} role="button">
        {data.question}
      </div>
      {isOpen && (
        <ContentfulRichText document={data.answer && data.answer.json} />
      )}
    </Container>
  );
};

export const query = graphql`
  fragment FAQInformation on ContentfulContentFaqCategoryQuestion {
    answer {
      json
    }
    question
    slug
  }
`;

export default FaqQuestion;
