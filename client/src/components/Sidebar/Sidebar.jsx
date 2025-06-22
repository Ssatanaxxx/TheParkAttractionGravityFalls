import { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faHouse,
  faChartLine,
  faChartColumn,
  faWallet,
  faChartPie,
  faEnvelope,
  faSliders,
  faPhoneVolume,
  faAngleLeft,
  faAngleRight,
  faUser,
  faHistory,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Tooltip = styled.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: ${(props) => (props.theme === "dark" ? "#2B2B40" : "#3F4254")};
  color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#FFFFFF")};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  margin-left: 10px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &::before {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent
      ${(props) => (props.theme === "dark" ? "#2B2B40" : "#3F4254")} transparent
      transparent;
  }
`;

const SidebarContainer = styled.div`
  position: relative;
  width: ${(props) => (props.isOpened ? "250px" : "80px")};
  height: 100vh;
  background: ${(props) => (props.theme === "dark" ? "#1E1E2D" : "#FFFFFF")};
  color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#3F4254")};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  box-shadow: 0 0 28px 0 rgba(82, 63, 105, 0.08);
  z-index: 100;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: ${(props) => (props.isOpened ? "10px" : "0")};
  transition: all 0.3s ease;
`;

const LogoText = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  white-space: nowrap;
  opacity: ${(props) => (props.isOpened ? "1" : "0")};
  transition: opacity 0.3s ease;
  flex-grow: 1;
`;

const ToggleButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => (props.theme === "dark" ? "#2B2B40" : "#F5F8FA")};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.theme === "dark" ? "#3699FF" : "#E1F0FF")};
    color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#3699FF")};
  }
`;

const NavSection = styled.div`
  flex-grow: 1;
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.theme === "dark" ? "#2B2B40" : "#F5F8FA")};
    color: ${(props) => (props.theme === "dark" ? "#3699FF" : "#3699FF")};

    ${Tooltip} {
      opacity: ${(props) => (props.$isSidebarClosed ? 1 : 0)};
    }
  }

  &.active {
    background: ${(props) => (props.theme === "dark" ? "#3699FF" : "#E1F0FF")};
    color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#3699FF")};
  }
`;

const NavIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => (props.isOpened ? "10px" : "0")};
  transition: all 0.3s ease;
`;

const NavText = styled.span`
  opacity: ${(props) => (props.isOpened ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const BottomSection = styled.div`
  border-top: 1px solid
    ${(props) => (props.theme === "dark" ? "#2B2B40" : "#F5F8FA")};
  padding-top: 20px;
`;

const ProfileSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  margin-top: 20px;
  cursor: pointer;
`;
const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => (props.theme === "dark" ? "#2B2B40" : "#F5F8FA")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => (props.isOpened ? "10px" : "0")};
  transition: all 0.3s ease;
`;

const ProfileInfo = styled.div`
  opacity: ${(props) => (props.isOpened ? "1" : "0")};
  transition: opacity 0.3s ease;
  flex-grow: 1;
  white-space: nowrap;
`;

const ProfileInfoName = styled.div`
  font-weight: 600;
`;

const ProfileRole = styled.div`
  font-size: 0.8rem;
  color: ${(props) => (props.theme === "dark" ? "#92929F" : "#B5B5C3")};
`;

const routes = [
  { title: "Dashboard", icon: faHouse, path: "/" },
  { title: "Sales", icon: faChartLine, path: "/sales" },
  { title: "Costs", icon: faChartColumn, path: "/costs" },
  { title: "Payments", icon: faWallet, path: "/payments" },
  { title: "Finances", icon: faChartPie, path: "/finances" },
  { title: "Messages", icon: faEnvelope, path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: faSliders, path: "/settings" },
  { title: "Support", icon: faPhoneVolume, path: "/support" },
];

const ProfileDropdown = styled.div`
  position: absolute;
  right: -245px;
  transform: translateY(-50%);
  width: 240px;
  background: ${(props) => (props.theme === "dark" ? "#1E1E2D" : "#FFFFFF")};
  border-radius: 6px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 16px 0 8px 0;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen
      ? "translateY(-50%) translateX(0)"
      : "translateY(-50%) translateX(10px)"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  border: 1px solid
    ${(props) => (props.theme === "dark" ? "#2B2B40" : "#EBEDF3")};
`;

const ProfileHeader = styled.div`
  padding: 0 16px 12px 16px;
  border-bottom: 1px solid
    ${(props) => (props.theme === "dark" ? "#2B2B40" : "#EBEDF3")};
  margin-bottom: 8px;
`;

const ProfileName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.theme === "dark" ? "#FFFFFF" : "#3F4254")};
`;

const ProfileEmail = styled.div`
  font-size: 12px;
  color: ${(props) => (props.theme === "dark" ? "#92929F" : "#B5B5C3")};
  margin-top: 4px;
`;

const DropdownItem = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.theme === "dark" ? "#E4E6F1" : "#3F4254")};
  font-size: 13px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.theme === "dark" ? "#2B2B40" : "#F5F8FA")};
    color: ${(props) => (props.theme === "dark" ? "#3699FF" : "#3699FF")};
  }

  &:not(:last-child) {
    border-bottom: 1px solid
      ${(props) => (props.theme === "dark" ? "#2B2B40" : "#EBEDF3")};
  }
`;

const DropdownIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.theme === "dark" ? "#92929F" : "#B5B5C3")};

  ${DropdownItem}:hover & {
    color: inherit;
  }
`;

const DropdownText = styled.div`
  flex-grow: 1;
  font-weight: 500;
`;

const Divider = styled.div`
  height: 1px;
  background: ${(props) => (props.theme === "dark" ? "#2B2B40" : "#EBEDF3")};
  margin: 6px 0;
`;

const profileRoutes = [
  { title: "View profile", icon: faUser },
  { title: "Manage subscriptions", icon: faCog },
  { title: "View history", icon: faHistory },
  { type: "divider" },
  { title: "Logout", icon: faSignOutAlt, color: "#F64E60" },
];

const Sidebar = ({ color = "light" }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpened(!isOpened);
    setIsProfileOpen(false);
  };

  const toggleProfile = (e) => {
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
  };

  const handleItemClick = (title, path) => {
    setActiveItem(title);
    console.log(`Navigating to ${path}`);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
      {/* Оверлей для закрытия профиля по клику вне */}
      {isProfileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
          }}
          onClick={closeProfile}
        />
      )}

      <SidebarContainer
        theme={color}
        isOpened={isOpened}
        onClick={closeProfile}
      >
        <div>
          <LogoSection>
            <Logo src={logo} alt="Technify logo" isOpened={isOpened} />
            <LogoText isOpened={isOpened}>Technify</LogoText>
            <ToggleButton theme={color} onClick={toggleSidebar}>
              <FontAwesomeIcon icon={isOpened ? faAngleLeft : faAngleRight} />
            </ToggleButton>
          </LogoSection>

          <NavSection>
            {routes.map((route) => (
              <NavItem
                key={route.title}
                theme={color}
                $isSidebarClosed={!isOpened}
                className={activeItem === route.title ? "active" : ""}
                onClick={() => handleItemClick(route.title, route.path)}
              >
                <NavIcon isOpened={isOpened}>
                  <FontAwesomeIcon icon={route.icon} />
                </NavIcon>
                <NavText isOpened={isOpened}>{route.title}</NavText>
                {!isOpened && <Tooltip theme={color}>{route.title}</Tooltip>}
              </NavItem>
            ))}
          </NavSection>
        </div>

        <div>
          <BottomSection theme={color}>
            {bottomRoutes.map((route) => (
              <NavItem
                key={route.title}
                theme={color}
                $isSidebarClosed={!isOpened}
                className={activeItem === route.title ? "active" : ""}
                onClick={() => handleItemClick(route.title, route.path)}
              >
                <NavIcon isOpened={isOpened}>
                  <FontAwesomeIcon icon={route.icon} />
                </NavIcon>
                <NavText isOpened={isOpened}>{route.title}</NavText>
                {!isOpened && <Tooltip theme={color}>{route.title}</Tooltip>}
              </NavItem>
            ))}
          </BottomSection>

          <ProfileSection onClick={toggleProfile}>
            <ProfileImage theme={color} isOpened={isOpened}>
              <FontAwesomeIcon icon={faUser} />
            </ProfileImage>
            {isOpened && (
              <ProfileInfo isOpened={isOpened}>
                <ProfileInfoName>Mark Tableerz</ProfileInfoName>
                <ProfileRole theme={color}>NetworkInterviews</ProfileRole>
              </ProfileInfo>
            )}

            {/* Выпадающее меню  */}
            <ProfileDropdown
              theme={color}
              isOpen={isProfileOpen}
              onClick={(e) => e.stopPropagation()}
            >
              <ProfileHeader theme={color}>
                <ProfileName>Mark Tablerz</ProfileName>
                <ProfileEmail>help@tablerz.com</ProfileEmail>
              </ProfileHeader>

              {profileRoutes.map((item, index) =>
                item.type === "divider" ? (
                  <Divider key={index} theme={color} />
                ) : (
                  <DropdownItem
                    key={item.title}
                    theme={color}
                    style={item.color ? { color: item.color } : {}}
                  >
                    <DropdownIcon theme={color}>
                      <FontAwesomeIcon icon={item.icon} />
                    </DropdownIcon>
                    <DropdownText>{item.title}</DropdownText>
                  </DropdownItem>
                )
              )}
            </ProfileDropdown>
          </ProfileSection>
        </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
