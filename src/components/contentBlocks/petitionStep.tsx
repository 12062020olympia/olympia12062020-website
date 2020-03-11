import React from 'react';

export interface PetitionStepProps {
  subtitle: string,
  title: string,
}

const PetitionStep = ({
  subtitle,
  title,
}: PetitionStepProps) => {
  return (
    <p>{subtitle} {title}</p>
  )
}

export default PetitionStep;
