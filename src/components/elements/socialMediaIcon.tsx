import React, { FC } from 'react';
import styled from 'styled-components';

import FacebookIcon from '../../icons/icon-facebook.svg';
import InstagramIcon from '../../icons/icon-instagram.svg';
import YoutubeIcon from '../../icons/icon-youtube.svg';
import * as colors from '../../style/colors';

interface Props {
  network: Network;
  type: IconDisplay;
}

type Network = 'instagram' | 'facebook' | 'youtube';
type IconDisplay = 'menu' | 'footer';

const iconMap: Record<Network, string> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const iconLink: Record<Network, string> = {
  facebook: 'https://www.facebook.com/12062020Olympia/',
  instagram: 'https://www.instagram.com/12062020olympia/',
  youtube: 'https://www.youtube.com/channel/UCinBMoY3eyYkofgynaAz5Ig',
};

const IconContainer = styled.a<{ type: IconDisplay }>`
  color: ${({ type }) => (type === 'menu' ? colors.Grey900 : colors.Grey500)};

  :not(:last-child) {
    margin-right: 30px;
  }
`;

const SocialMediaIcon: FC<Props> = ({ network, type }) => {
  const Icon = iconMap[network];

  return (
    <IconContainer type={type} href={iconLink[network]} target="_blank">
      <Icon />
    </IconContainer>
  );
};

export default SocialMediaIcon;
