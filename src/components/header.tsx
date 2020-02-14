import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

type Props = {
  siteTitle: string;
};

const StyledHeader = styled.header`
  background-color: #f3b7d4;
  position: fixed;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 0;
  justify-content: space-between;
`;

const Header: React.FC<Props> = ({ siteTitle }: Props) => (
  <StyledHeader>
    <HeaderContent>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
