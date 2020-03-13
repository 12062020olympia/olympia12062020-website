import { graphql } from 'gatsby';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { ExpandableContentBlockInformationFragment } from '../../../types/graphql-types';
import ExpandIcon from '../../icons/icon-expand.svg';
import * as colors from '../../style/colors';
import {
  applyMediaQueryMd,
  applyMediaQueryLg,
  contentMargin,
  contentMaxWidth,
} from '../../style/dimensions';
import ContentfulRichText from '../contentfulRichText';
import IconButton from '../elements/iconButton';
import Flex from '../elements/flex';

interface Props {
  data: ExpandableContentBlockInformationFragment;
}

const Container = styled.div`
  border-bottom: 1px solid ${colors.Grey300};
  max-width: ${contentMaxWidth};
  padding: 24px 0;

  & > * {
    margin: 0 ${contentMargin.sm};
  }

  ${applyMediaQueryLg(css`
    & > * {
      margin: 0 0;
    }
  `)}
`;

const ExpandButton = styled(IconButton)<{ isExpanded: boolean }>`
  & svg {
    transform: rotate(${({ isExpanded }) => (isExpanded ? '-180deg' : '0deg')});
    transition: transform 0.2s ease-out;
    will-change: transform;
  }
`;

export const ExpandableContentBlock: FC<Props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      <Flex
        onClick={() => setIsExpanded(!isExpanded)}
        alignItems="center"
        justifyContent="space-between"
      >
        {data.title}

        <ExpandButton
          Icon={ExpandIcon}
          isExpanded={isExpanded}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      </Flex>
      {isExpanded && (
        <div>
          <ContentfulRichText document={data.content && data.content.json} />
        </div>
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
