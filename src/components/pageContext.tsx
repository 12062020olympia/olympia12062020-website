import React, { FC, useState, PropsWithChildren } from 'react';
import { hasSeenCookieNotice, hasAcceptedCookies } from '../cookie';

export interface PageContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  displayCookieBanner: boolean;
  setDisplayCookieBanner: (displayCookieBanner: boolean) => void;
  showCookieContent: boolean;
  setShowCookieContent: (showCookieContent: boolean) => void;
}

const PageContext = React.createContext<PageContextProps>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  displayCookieBanner: false,
  setDisplayCookieBanner: () => {},
  showCookieContent: false,
  setShowCookieContent: () => {},
});

export const PageProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayCookieBanner, setDisplayCookieBanner] = useState(
    !hasSeenCookieNotice()
  );
  const [showCookieContent, setShowCookieContent] = useState(
    hasAcceptedCookies()
  );

  return (
    <PageContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        displayCookieBanner,
        setDisplayCookieBanner,
        showCookieContent,
        setShowCookieContent,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const PageConsumer = PageContext.Consumer;

export default PageContext;
