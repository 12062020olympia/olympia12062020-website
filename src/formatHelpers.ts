import { IntlShape } from 'gatsby-plugin-intl';

export function formatDateRange(
  intl: IntlShape,
  startDate: string,
  endDate: string
): string {
  const startDateStr = startDate ? intl.formatDate(startDate) : '';
  const endDateStr = endDate ? intl.formatDate(endDate) : '';

  if (!startDateStr && !endDateStr) {
    return '';
  }
  if (startDateStr === endDateStr) {
    return startDateStr;
  }
  if (!startDateStr) {
    return intl.formatMessage({ id: 'date.beforeDate' }, { date: endDateStr });
  }
  if (!endDateStr) {
    return intl.formatMessage({ id: 'date.afterDate' }, { date: startDateStr });
  }

  return `${startDateStr} - ${endDateStr}`;
}
