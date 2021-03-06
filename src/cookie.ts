import Cookies from 'js-cookie';

const cookieNoticeAccepted = 'cookie_notice_accepted';

export function hasSeenCookieNotice(): boolean {
  return Cookies.get(cookieNoticeAccepted) !== undefined;
}

export function hasAcceptedCookies(): boolean {
  return Cookies.get(cookieNoticeAccepted) === 'true';
}

export function setHasAcceptedCookies(value: boolean) {
  Cookies.set(cookieNoticeAccepted, value.toString());
}
