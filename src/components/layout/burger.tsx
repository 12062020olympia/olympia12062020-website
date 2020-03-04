import React, { FC } from 'react';

import BurgerIcon from '../../icons/icon-burger.svg';
import IconButton from '../elements/IconButton';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const Burger: FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <IconButton Icon={BurgerIcon} onClick={() => setIsMenuOpen(!isMenuOpen)} />
  );
};

export default Burger;
