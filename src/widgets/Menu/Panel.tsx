import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  padding-bottom: ${({ isMobile }) => (isMobile ? "0" : "0")}px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? SIDEBAR_WIDTH_FULL : 0)}px;
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  z-index: ${({ theme }) => theme.zIndices.panel};

  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  border-right: ${({ theme }) => `1.5px solid  ${theme.colors.borderColor}`};

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, isMobile } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
