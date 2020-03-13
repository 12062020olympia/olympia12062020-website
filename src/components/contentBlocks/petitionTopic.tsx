import _ from 'lodash';
import React, { FC } from 'react';

interface PetitionTopicProps {
  title: string;
}

const PetitionTopic: FC<PetitionTopicProps> = ({ title }) => {
  const repeatedTitle = _.repeat(`${title} `, 20);
  return (
    <p>{repeatedTitle}</p>
  );
};

export default PetitionTopic;
