import React from 'react';
import {
  BLOCKS,
  // , MARKS, Document, Block
} from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';

type Props = {
  document: {
    nodeType: BLOCKS.DOCUMENT;
    content: any[];
    data: any;
  };
};

function getObjectKeyArray(obj: any): string[] {
  return Object.keys(obj);
}

const ContentfulRichText: React.FC<Props> = ({ document }: Props) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (!node.data.target.fields) return;
        const { file, description } = node.data.target.fields;
        const locales = getObjectKeyArray(file);
        return locales.map(locale => (
          <img
            src={file[locale].url}
            alt={description[locale]}
            data-locale={locale}
            key={locale}
          />
        ));
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        if (node.data.target.sys.contentType.sys.id === 'embeddedHtml') {
          const { code } = node.data.target.fields;
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
  return <div>{documentToReactComponents(document, options)}</div>;
};
export default ContentfulRichText;
