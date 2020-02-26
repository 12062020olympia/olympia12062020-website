import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { ExpandableContentBlockInformationFragment } from '../../../types/graphql-types';
import ContentfulRichText from '../contentfulRichText';
import { graphql } from 'gatsby';

interface Props {
  data: ExpandableContentBlockInformationFragment;
}

const Container = styled.div`
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.11);
  padding: 24px 0;
`;

export const ExpandableContentBlock: FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div onClick={() => setIsOpen(!isOpen)} role="button">
        {data.title}
      </div>
      {isOpen && (
        <ContentfulRichText document={data.content && data.content.json} />
      )}
    </Container>
  );
};

export const query = graphql`
  fragment ExpandableContentBlockInformation on ContentfulContentBlock {
    title
    slug
    appearance
    content {
      json
    }
  }
`;

export default ExpandableContentBlock;
