import { IntlContextConsumer, changeLocale, useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import React, { FC } from 'react';

interface Props {}

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  max-width: 960px;
`;

const LanguageContainer = styled.div`
  display: flex;

  > * {
    margin-left: 16px;
  }
`;

const LanguageLink = styled.a`
  cursor: pointer;
  text-transform: uppercase;
`;

const Footer: FC<Props> = () => {
  const intl = useIntl();
  return (
    <Container>
      <LanguageContainer>
        {intl.formatMessage({ id: 'footer.language' })}
        <IntlContextConsumer>
          {({ languages }: { languages: string[] }) =>
            languages.map(language => (
              <LanguageLink
                key={language}
                onClick={() => changeLocale(language)}
              >
                {language}
              </LanguageLink>
            ))
          }
        </IntlContextConsumer>
      </LanguageContainer>
    </Container>
  );
};

export default Footer;
