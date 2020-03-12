import { IntlShape } from 'gatsby-plugin-intl';
import _ from 'lodash';

export function formatDateRange(
  intl: IntlShape,
  startDate: string,
  endDate: string
): string {
  const startDateStr = startDate ? intl.formatDate(startDate) : '';
  const endDateStr = endDate ? intl.formatDate(endDate) : '';
  return _.compact([startDateStr, endDateStr]).join(' - ');
}
