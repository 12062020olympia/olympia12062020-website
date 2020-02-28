import React, { FC } from 'react';

import BurgerIcon from '../../icons/icon-burger.svg';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

const Burger: FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <BurgerIcon color="#000" />
    </button>
  );
};

export default Burger;
