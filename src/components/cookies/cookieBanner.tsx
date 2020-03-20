import { useIntl, Link } from 'gatsby-plugin-intl';
import React, { FC, useContext } from 'react';
import { Col, Container, Row } from 'react-awesome-styled-grid';
import styled, { css } from 'styled-components';

import { setHasAcceptedCookies } from '../../cookie';
import * as colors from '../../style/colors';
import {
  applyMediaQueryLg,
  applyMediaQueryMd,
  contentMargin,
} from '../../style/dimensions';
import Button from '../elements/button';
import Paragraph from '../elements/paragraph';
import Title from '../elements/title';
import PageContext from '../pageContext';

interface Props {}

const CookieContainer = styled.div`
  bottom: 0;
  left: 0;
  background-color: ${colors.Grey800};
  color: ${colors.White};
  font-size: 20px;
  padding: 40px ${contentMargin.sm};
  position: fixed;
  right: 0;

  ${applyMediaQueryMd(css`
    padding: 25px ${contentMargin.md};
  `)}

  ${applyMediaQueryLg(css`
    padding: 25px ${contentMargin.lg};
  `)}
`;

const CookieTitle = styled(Title)`
  color: ${colors.White};
`;

const CookieText = styled(Paragraph)`
  color: ${colors.White};
`;

const AcceptCol = styled(Col)`
  ${applyMediaQueryMd(css`
    order: 2;
  `)}

  ${applyMediaQueryLg(css`
    justify-content: center;
  `)}
`;

const AcceptButton = styled(Button)`
  align-self: center;
  margin: 24px 0;

  ${applyMediaQueryMd(css`
    align-self: flex-end;
  `)}
`;

const DeferCol = styled(Col)`
  ${applyMediaQueryMd(css`
    justify-content: center;
  `)}
`;

const InlineButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.BrandPrimary500};
  font-size: 12px;
  text-decoration: underline;

  :hover {
    color: ${colors.BrandPrimary300};
  }

  ${applyMediaQueryMd(css`
    align-self: flex-end;
    margin-right: 30px;
  `)}
`;

const CookieBanner: FC<Props> = () => {
  const intl = useIntl();
  const {
    displayCookieBanner,
    setDisplayCookieBanner,
    setShowCookieContent,
  } = useContext(PageContext);
  return (
    <>
      {displayCookieBanner && (
        <CookieContainer>
          <Container>
            <Row>
              <Col xs={12} lg={6} noGutter>
                <CookieTitle title="Cookies" type="h5" />
                <CookieText type="small">
                  {intl.formatMessage({ id: 'cookie.text' })}{' '}
                  <Link to="/privacyPolicy" style={{ color: colors.White }}>
                    {intl.formatMessage({ id: 'cookie.privacyPolicy' })}
                  </Link>
                </CookieText>
              </Col>
              <AcceptCol xs={12} sm={2} lg={1} noGutter>
                <AcceptButton
                  buttonType="complementary"
                  label={intl.formatMessage({ id: 'cookie.accept' })}
                  onClick={() => {
                    setHasAcceptedCookies(true);
                    setDisplayCookieBanner(false);
                    setShowCookieContent(true);
                  }}
                />
              </AcceptCol>
              <DeferCol xs={12} sm={10} lg={5} noGutter>
                <InlineButton
                  onClick={() => {
                    setHasAcceptedCookies(false);
                    setDisplayCookieBanner(false);
                    setShowCookieContent(false);
                  }}
                >
                  {intl.formatMessage({ id: 'cookie.reject' })}
                </InlineButton>
              </DeferCol>
            </Row>
          </Container>
        </CookieContainer>
      )}
    </>
  );
};

export default CookieBanner;
