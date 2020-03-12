import { useIntl } from 'gatsby-plugin-intl';
import React, { FC } from 'react';
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

interface Props {
  displayCookieBanner: boolean;
  setDisplayCookieBanner: (display: boolean) => void;
}

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

const InlineButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.BrandPrimary500};
  font-size: 12px;
  text-decoration: underline;

  :hover {
    color: ${colors.BrandPrimary300};
  }
`;

const CookieBanner: FC<Props> = ({
  displayCookieBanner,
  setDisplayCookieBanner,
}) => {
  const intl = useIntl();
  return (
    <>
      {displayCookieBanner && (
        <CookieContainer>
          <Container>
            <Row>
              <Col xs={12}>
                <CookieTitle title="Cookies" type="h5" />
                <CookieText type="small">
                  {intl.formatMessage({ id: 'cookie.text' })}
                </CookieText>
              </Col>
              <Col xs={12}>
                <Button
                  buttonType="secondary"
                  label={intl.formatMessage({ id: 'cookie.accept' })}
                  onClick={() => {
                    setHasAcceptedCookies(true);
                    setDisplayCookieBanner(false);
                  }}
                />
              </Col>
              <Col xs={12}>
                <InlineButton
                  onClick={() => {
                    setHasAcceptedCookies(false);
                    setDisplayCookieBanner(false);
                  }}
                >
                  {intl.formatMessage({ id: 'cookie.reject' })}
                </InlineButton>
              </Col>
            </Row>
          </Container>
        </CookieContainer>
      )}
    </>
  );
};

export default CookieBanner;
