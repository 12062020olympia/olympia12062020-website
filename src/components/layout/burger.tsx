import React, { FC } from 'react';

import BurgerIcon from '../../icons/icon-burger.svg';
import IconButton from '../elements/iconButton';
import { useIntl } from 'gatsby-plugin-intl';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const Burger: FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  const intl = useIntl();
  return (
    <IconButton
      Icon={BurgerIcon}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      ariaLabel={intl.formatMessage({ id: 'iconButton.openMenu' })}
    />
  );
};

export default Burger;
