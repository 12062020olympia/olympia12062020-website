import React, { FC, useContext } from 'react';

import BurgerIcon from '../../icons/icon-burger.svg';
import IconButton from '../elements/iconButton';
import { useIntl } from 'gatsby-plugin-intl';
import PageContext from '../pageContext';

interface Props {}

const Burger: FC<Props> = () => {
  const intl = useIntl();
  const { isMenuOpen, setIsMenuOpen } = useContext(PageContext);
  return (
    <IconButton
      Icon={BurgerIcon}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      ariaLabel={intl.formatMessage({ id: 'iconButton.openMenu' })}
    />
  );
};

export default Burger;
