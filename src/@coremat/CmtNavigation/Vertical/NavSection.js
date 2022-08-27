import React, { useContext } from "react";

import clsx from "clsx";

import { List } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

import NavMenuItem from "./NavMenuItem";
import NavCollapse from "./NavCollapse";
import SidebarThemeContext from "../../CmtLayouts/SidebarThemeContext/SidebarThemeContext";
import Can from "../../../can";
import { useSelector } from "react-redux";
// import IntlMessages from "../../../@jumbo/utils/IntlMessages";

const useStyles = makeStyles((theme) => ({
  navHeader: {
    position: "relative",
    padding: "24px 16px 20px 16px",
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 10,
    letterSpacing: 1.5,
    ".Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &": {
      display: "none",
    },
  },

  navSection: {
    position: "relative",
    fontWeight: theme.typography.fontWeightRegular,
    "&:not(:first-child) .Cmt-navHeader": {
      borderTop: (props) => `solid 1px ${props.sidebarTheme.borderColor}`,
      marginTop: 10,
    },
    "&:not(:last-child)": {
      ".Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &": {
        borderBottom: (props) => `solid 1px ${props.sidebarTheme.borderColor}`,
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
}));

const NavSection = (props) => {
  const { name, children = [] } = props;
  const isExpandable = children && children.length > 0;
  const { sidebarTheme } = useContext(SidebarThemeContext);
  const classes = useStyles({ sidebarTheme });
  const { userProfile, subModules } = useSelector(({ auth }) => auth);
  const MenuCollapse =
    name !== undefined ? (
      <List
        component="div"
        className={clsx(classes.navHeader, "Cmt-navHeader")}
      >
        {name}
      </List>
    ) : (
      <div className="Cmt-navHeader" />
    );

  const MenuItemChildren = isExpandable ? (
    <List component="div" disablePadding>
      {children.map((item, index) => (
        <Can
        role={userProfile?.roleId}
        perform="subModule-nav-access"
        data={{
          submoduleName: item.pathName,
          subModuleList: subModules,
        }}
        yes={() => {

        switch (item.type) {
          case "section":
            return <NavSection {...item} key={index} />;
          case "collapse":
            return (
              <NavCollapse
                {...item}
                key={index}
                roleIdName={userProfile?.roleId}
                pathName={item.pathName}
              />
            );
          default:
            return <NavMenuItem {...item} key={index} />;
        }


      }}
      />

     ) 
      )}
    </List>
  ) : null;
  return (
    <div className={classes.navSection}>
      {MenuCollapse}
      {MenuItemChildren}
    </div>
  );
};

export default NavSection;
