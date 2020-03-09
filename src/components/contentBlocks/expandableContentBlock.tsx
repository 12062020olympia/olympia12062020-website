import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { ExpandableContentBlockInformationFragment } from '../../../types/graphql-types';
import ContentfulRichText from '../contentfulRichText';
import { graphql } from 'gatsby';

interface Props {
  data: ExpandableContentBlockInformationFragment;
}

const Container = styled.div``;

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
