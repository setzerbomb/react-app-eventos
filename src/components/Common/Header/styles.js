import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  font-size: 20px;

  p {
    color: black;
    text-align: center;
    padding-top: 10px;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-align: center;
  padding: 10px 10px 10px;

  &:hover {
    color: #007bff;
    text-decoration: none;
  }
`;
