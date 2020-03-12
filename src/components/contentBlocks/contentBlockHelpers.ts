import _ from 'lodash';
import moment, { Moment } from 'moment';

import { ContentBlockInformationFragment, Maybe } from '../../../types/graphql-types';

export function getOngoingContentBlocks(
  contentBlocks: Array<Maybe<ContentBlockInformationFragment>>
): Array<ContentBlockInformationFragment> {
  const today = moment();
  const validContentBlocks = _.compact(contentBlocks);
  const sortedContentBlocks = validContentBlocks.sort(compareContentBlocksByDateRange);
  const ongoingPetitionsSteps = sortedContentBlocks.filter((cb) => {
      const startDatetime = getStartDatetime(cb) || moment('1900-01-01');
      const endDatetime = getEndDatetime(cb) || moment('2100-01-01');
      return today.isAfter(startDatetime) && today.isBefore(endDatetime);
  });
  if (ongoingPetitionsSteps.length > 0) {
    return ongoingPetitionsSteps;
  }
  return [];
}

function compareContentBlocksByDateRange(cb1: ContentBlockInformationFragment, cb2: ContentBlockInformationFragment) {
  const startDatetime1 = getStartDatetime(cb1) || moment('1900-01-01');
  const startDatetime2 = getStartDatetime(cb2) || moment('1900-01-01');
  if (startDatetime1 < startDatetime2) {
    return 1;
  } else if (startDatetime1 > startDatetime2) {
    return -1;
  }
  const endDatetime1 = getEndDatetime(cb1) || moment('2100-01-01');
  const endDatetime2 = getEndDatetime(cb2) || moment('2100-01-01');
  if (endDatetime1 < endDatetime2) {
    return 1;
  } else if (endDatetime1 > endDatetime2) {
    return -1;
  }
  return 0;
}

export function getStartDatetime(cb: ContentBlockInformationFragment): Moment | undefined {
  return cb.startDate ? moment(cb.startDate) : undefined;
}

export function getEndDatetime(cb: ContentBlockInformationFragment): Moment | undefined {
  return cb.endDate ? moment(cb.endDate).add(1, 'day') : undefined;
}
