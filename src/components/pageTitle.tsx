import React, { FC } from 'react';
import styled from 'styled-components';
import * as colors from '../style/colors';
import { fontStyles } from '../style/fonts';

interface Props {
  title?: string | null;
  header?: string | null;
  subheader?: string | null;
}

const Container = styled.div`
  background-color: ${colors.Secondary};
  display: flex;
  flex-direction: column;
  padding: 75px 0 65px 30px;
`;

const Title = styled.h2`
  ${fontStyles.small}
  color: ${colors.Grey900};
  letter-spacing: 0.05em; 
  margin-block-start: auto;
  margin-block-end: auto;
  text-transform: uppercase;
`;

const Header = styled.h3`
  ${fontStyles.headline}
  margin-block-start: auto;
  margin-block-end: auto;
`;

const Subheader = styled.h3`
  ${fontStyles.headline}
  color: ${colors.Grey500};
  margin-block-start: auto;
  margin-block-end: auto;
`;

const PageTitle: FC<Props> = ({ title, header, subheader }) => (
  <Container>
    <Title>{title}</Title>
    <Header>{header}</Header>
    <Subheader>{subheader}</Subheader>
  </Container>
);

export default PageTitle;
