import _ from 'lodash';
import moment, { Moment } from 'moment';

import {
  ContentBlockInformationFragment,
  Maybe,
} from '../../../types/graphql-types';

export function getOngoingContentBlocks(
  contentBlocks: Array<Maybe<ContentBlockInformationFragment>>
): Array<ContentBlockInformationFragment> {
  const today = moment();
  const validContentBlocks = _.compact(contentBlocks);
  const ongoingPetitionsSteps = validContentBlocks.filter(cb => {
    const startDatetime = getStartDatetime(cb) || moment('1900-01-01');
    const endDatetime = getEndDatetime(cb) || moment('2100-01-01');
    return today.isAfter(startDatetime) && today.isBefore(endDatetime);
  });
  if (ongoingPetitionsSteps.length > 0) {
    return ongoingPetitionsSteps;
  }
  return [];
}

export function getStartDatetime(
  cb: ContentBlockInformationFragment
): Moment | undefined {
  return cb.startDate ? moment(cb.startDate) : undefined;
}

export function getEndDatetime(
  cb: ContentBlockInformationFragment
): Moment | undefined {
  return cb.endDate ? moment(cb.endDate).add(1, 'day') : undefined;
}
