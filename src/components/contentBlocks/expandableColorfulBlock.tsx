import { graphql } from 'gatsby';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { ExpapandableColorfulInformationFragment } from '../../../types/graphql-types';
import ArrowIcon from '../../icons/icon-arrow.svg';
import * as colors from '../../style/colors';
import {
  contentPadding,
  contentPaddingWeb,
  maxMobileWidth,
  contentMaxWidth,
} from '../../style/dimensions';
import ContentfulRichText from '../contentfulRichText';
import Flex from '../elements/flex';
import Title from '../elements/title';
import IconButton from '../elements/iconButton';

interface Props {
  data: ExpapandableColorfulInformationFragment;
}

const Container = styled.div``;

const TitleRow = styled(Flex)<{ backgroundColor: string | null | undefined }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? colors.contentColors[backgroundColor] : colors.White};
  padding: 20px ${contentPadding};

  @media (min-width: ${maxMobileWidth}) {
    padding: 20px ${contentPaddingWeb};
  }
`;

const ArrowButton = styled(IconButton)<{ isOpen: boolean }>`
  transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});
  transition: transform 0.1s ease-in-out;
`;

const ContentWrapper = styled.div`
  margin: 0 ${contentPadding} 40px ${contentPadding};
  max-width: ${contentMaxWidth};

  @media (min-width: ${maxMobileWidth}) {
    margin: 0 ${contentPaddingWeb} 40px ${contentPaddingWeb};
  }
`;

export const ExpapandableColorful: FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <TitleRow
        backgroundColor={data.backgroundColor}
        onClick={() => setIsOpen(!isOpen)}
        justifyContent="space-between"
        role="button"
      >
        <Title type="headline" title={data.title!} />
        <ArrowButton
          Icon={ArrowIcon}
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
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
