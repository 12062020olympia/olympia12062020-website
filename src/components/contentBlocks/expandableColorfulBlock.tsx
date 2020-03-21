import { graphql } from 'gatsby';
import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

import { ExpapandableColorfulInformationFragment } from '../../../types/graphql-types';
import MinusIcon from '../../icons/icon-minus.svg';
import PlusIcon from '../../icons/icon-plus.svg';
import * as colors from '../../style/colors';
import {
  contentMaxWidth,
  contentMargin,
  applyMediaQueryMd,
  applyMediaQueryLg,
} from '../../style/dimensions';
import ContentfulRichText from '../contentfulRichText';
import Flex from '../elements/flex';
import Title from '../elements/title';
import IconButton from '../elements/iconButton';
import { useIntl } from 'gatsby-plugin-intl';

interface Props {
  data: ExpapandableColorfulInformationFragment;
}

const Container = styled.div``;

const TitleRow = styled(Flex)<{ backgroundColor: string | null | undefined }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  cursor: pointer;
  padding: 20px ${contentMargin.sm};

  ${applyMediaQueryMd(css`
    padding: 20px ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 20px ${contentMargin.lg};
  `)}
`;

const ExpandButton = styled(IconButton)<{ isOpen: boolean }>`
  transition: transform 0.1s ease-in-out;

  svg {
    height: 20px;
    width: 20px;
  }
`;

const ContentWrapper = styled.div`
  padding: 0 ${contentMargin.sm} 40px ${contentMargin.sm};
  margin: 0 auto;
  max-width: ${contentMaxWidth};

  ${applyMediaQueryMd(css`
    padding: 0 ${contentMargin.md} 40px ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 0 ${contentMargin.lg} 40px ${contentMargin.lg};
  `)}
`;

export const ExpapandableColorful: FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();
  return (
    <Container>
      <TitleRow
        alignItems="center"
        backgroundColor={data.backgroundColor}
        onClick={() => setIsOpen(!isOpen)}
        justifyContent="space-between"
        role="button"
      >
        <Title type="h3" title={data.title!} />
        <ExpandButton
          Icon={isOpen ? MinusIcon : PlusIcon}
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          ariaLabel={intl.formatMessage({ id: 'iconButton.expandContent' })}
        />
      </TitleRow>
      {isOpen && (
        <ContentWrapper>
          <ContentfulRichText document={data.content && data.content.json} />
        </ContentWrapper>
      )}
    </Container>
  );
};

export const query = graphql`
  fragment ExpapandableColorfulInformation on ContentfulContentBlock {
    title
    slug
    appearance
    backgroundColor
    content {
      json
    }
  }
`;

export default ExpapandableColorful;
