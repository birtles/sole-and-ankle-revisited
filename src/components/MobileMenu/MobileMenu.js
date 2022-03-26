/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" color={`var(--color-gray-900)`} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Nav>
          <a href="/sale" id="sale">
            Sale
          </a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  position: fixed;
  right: 0;
  top: 0;
  min-height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  min-width: 300px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: end;
  padding: 16px;
  margin-top: -16px;
  margin-right: -26px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  & a {
    color: var(--color-gray-900);
    text-decoration: none;

    &#sale {
      color: var(--color-secondary);
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;

  & a {
    color: var(--color-gray-700);
    text-decoration: none;
  }
`;

export default MobileMenu;
