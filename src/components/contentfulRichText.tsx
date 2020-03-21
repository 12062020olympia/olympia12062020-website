import React, { useContext } from 'react';
import {
  BLOCKS,
  // , MARKS, Document, Block
} from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';

import * as colors from '../style/colors';
import CookieAlternative from './cookies/cookieAlternative';
import PageContext from './pageContext';

interface Props {
  className?: string;
  document: {
    nodeType: BLOCKS.DOCUMENT;
    content: any[];
    data: any;
  };
}

const RichTextContainer = styled.div`
  hr {
    border: 1px solid ${colors.Grey300};
    margin: 45px 0;
  }
`;

function getObjectKeyArray(obj: any): string[] {
  return Object.keys(obj);
}

const ContentfulRichText: React.FC<Props> = ({
  className,
  document,
}: Props) => {
  const { showCookieContent } = useContext(PageContext);
  const options: Options = {
    renderText: text =>
      text.split('\n').map((text, i) => [i > 0 && <br key={i} />, text]),
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (!node.data.target.fields) return;
        const { file, description } = node.data.target.fields;
        const locales = getObjectKeyArray(file);
        return locales.map(locale => (
          <img
            src={file[locale].url}
            alt={description ? description[locale] : ''}
            data-locale={locale}
            key={locale}
            style={{ display: 'block', maxWidth: '100%', margin: '0 auto' }}
          />
        ));
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        if (node.data.target.sys.contentType.sys.id === 'embeddedHtml') {
          const {
            code,
            requiresCookieConsent,
            consentAlternativeLink,
          } = node.data.target.fields;

          if (requiresCookieConsent.de && !showCookieContent) {
            return (
              <CookieAlternative
                consentAlternativeLink={consentAlternativeLink.de}
              />
            );
          }
          return (
            <div
              style={{ display: 'flex' }}
              dangerouslySetInnerHTML={{ __html: code.de }}
            />
          );
        }
        return null;
      },
    },
  };
  return (
    <RichTextContainer className={className}>
      {documentToReactComponents(document, options)}
    </RichTextContainer>
  );
};
export default ContentfulRichText;
