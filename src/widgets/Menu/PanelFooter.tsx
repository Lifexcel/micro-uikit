import React from "react";
import styled from "styled-components";
import { CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { PanelProps, PushedProps } from "./types";
import { FOOTER_DESKTOP_HEIGHT, FOOTER_MOBILE_HEIGHT } from "./config";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

// const PriceLink = styled.a`
//   display: flex;
//   align-items: center;
//   svg {
//     transition: transform 0.3s;
//   }
//   :hover {
//     svg {
//       transform: scale(1.2);
//     }
//   }
// `;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`;

// const SocialEntry = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: ${MENU_ENTRY_HEIGHT}px;
//   padding: 0 16px;
// `;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  // toggleTheme,
  // isDark,
  // cakePriceUsd,
  currentLang,
  langs,
  setLang,
  isMobile,
  // priceLink,
}) => {
  const Container = styled.div`
    flex: none;
    padding: ${isMobile ? "30px 4px" : "10px 4px"};
    background-color: ${({ theme }) => theme.nav.background};
    border-top: solid 2px rgba(133, 133, 133, 0.1);
    height: ${isMobile ? FOOTER_MOBILE_HEIGHT : FOOTER_DESKTOP_HEIGHT}px;
    background: ${({ theme }) => theme.colors.footer};
    opacity: 0.9;
    margin-right: -2px;
  `;
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      {/* <SocialEntry>
        {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <PancakeRoundIcon width="24px" mr="8px" />
            <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        <Flex>
          {
            socials.map((social, index) => {
              const Icon = Icons[social.icon];
              const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
              const mr = index < socials.length - 1 ? "22px" : 0;
              // if (social.items) {
              //   return (
              //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
              //       {social.items.map((item) => (
              //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
              //           {item.label}
              //         </Link>
              //       ))}
              //     </Dropdown>
              //   );
              // }
              return (
                <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                  <Icon {...iconProps} />
                </Link>
              );
            })
          }
        </Flex>
      </SocialEntry>
     */}
      <SettingsEntry>
        {/* <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          // alignItems center is a Safari fix 
        <Flex alignItems="center">
          <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
          <Text color="textDisabled" mx="4px">
            /
          </Text>
          <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
        </Flex>
      </Button> */}
        <Dropdown
          position="top"
          target={
            <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
