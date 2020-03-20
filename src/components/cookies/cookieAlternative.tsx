import { useIntl, Link } from 'gatsby-plugin-intl';
import React, { FC, useContext } from 'react';
import styled from 'styled-components';

import { setHasAcceptedCookies } from '../../cookie';
import * as colors from '../../style/colors';
import Title from '../elements/title';
import { contentMargin } from '../../style/dimensions';
import Flex from '../elements/flex';
import Button from '../elements/button';
import PageContext from '../pageContext';

interface Props {
  alternativeLink?: string;
  consentAlternativeLink?: string;
}

const Container = styled.div`
  background-color: ${colors.Grey800};
  color: ${colors.White};
  padding: 40px ${contentMargin.sm};
  margin-top: 20px;
  position: relative;
`;

const ButtonContainer = styled(Flex)`
  > * {
    margin: 20px 0 0;
  }
`;

const StyledLink = styled.a`
  color: ${colors.BrandPrimary500} !important;
  font-size: 12px;
  font-weight: normal !important;
  text-decoration: underline;

  :hover {
    color: ${colors.BrandPrimary300};
  }
`;

const CookieAlternative: FC<Props> = ({ consentAlternativeLink }) => {
  const intl = useIntl();
  const { setShowCookieContent } = useContext(PageContext);
  return (
    <Container>
      <div>
        <Title type="h4" title={intl.formatMessage({ id: 'cookie.notice' })} />
        {intl.formatMessage(
          { id: 'cookieAlternative.text' },
          {
            privacyPolicy: (
              <Link to="/privacyPolicy" style={{ color: colors.White }}>
                {intl.formatMessage({ id: 'cookie.privacyPolicy' })}
              </Link>
            ),
          }
        )}
        <ButtonContainer flexDirection="column" alignItems="center">
          <Button
            buttonType="complementary"
            label={intl.formatMessage({ id: 'cookie.acceptAndShow' })}
            onClick={() => {
              setHasAcceptedCookies(true);
              setShowCookieContent(true);
            }}
          ></Button>
          <StyledLink href={consentAlternativeLink} target="_blank">
            {intl.formatMessage({ id: 'cookie.watchExternally' })}
          </StyledLink>
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default CookieAlternative;
