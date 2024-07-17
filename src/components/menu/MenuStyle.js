import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 8px;
  }
`;

export const NavItem = styled.li`
  display: inline;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  margin-left: auto;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #009;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 14px;
`;

export const Username = styled.span`
  margin-left: 8px;
`;
