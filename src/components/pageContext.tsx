import React, { FC, useState, PropsWithChildren } from 'react';
import { hasSeenCookieNotice } from '../cookie';

export interface PageContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  displayCookieBanner: boolean;
  setDisplayCookieBanner: (displayCookieBanner: boolean) => void;
}

const PageContext = React.createContext<PageContextProps>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  displayCookieBanner: false,
  setDisplayCookieBanner: () => {},
});

export const PageProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayCookieBanner, setDisplayCookieBanner] = useState(
    !hasSeenCookieNotice()
  );

  return (
    <PageContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        displayCookieBanner,
        setDisplayCookieBanner,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const PageConsumer = PageContext.Consumer;

export default PageContext;
