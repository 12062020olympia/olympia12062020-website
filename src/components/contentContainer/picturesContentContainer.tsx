import React, { FC } from 'react';

import { ContentContainerInformationFragment } from '../../../types/graphql-types';

interface Props {
  data: ContentContainerInformationFragment;
}

const PicturesContentContainer: FC<Props> = () => {
  return (
    <p>PicturesContentContainer</p>
  );
};

export default PicturesContentContainer;
