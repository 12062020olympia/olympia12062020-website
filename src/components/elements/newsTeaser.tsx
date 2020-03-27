import Image, { FluidObject } from 'gatsby-image';
import { useIntl, Link } from 'gatsby-plugin-intl';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import * as colors from '../../style/colors';
import Title from '../elements/title';
import { applyMediaQueryMd } from '../../style/dimensions';

interface Props {
  author?: string | null;
  id?: string;
  publishDate?: string;
  teaserPicture?: FluidObject | null;
  title?: string | null;
}

const Container = styled.div`
  margin-bottom: 40px;

  ${applyMediaQueryMd(css`
    margin-bottom: 120px;
  `)}
`;

const TeaserLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Subtitle = styled.span`
  color: ${colors.Grey500};
`;

const NewsTeaser: FC<Props> = ({
  author,
  id,
  publishDate,
  teaserPicture,
  title,
}) => {
  const intl = useIntl();
  return (
    <Container>
      <TeaserLink to={`/news/${id}`}>
        {teaserPicture && <Image fluid={teaserPicture} />}
        <Title type="h4" title={title || ''} />
        <Subtitle>
          {author} · {intl.formatDate(publishDate)}{' '}
        </Subtitle>
      </TeaserLink>
    </Container>
  );
};

export default NewsTeaser;
