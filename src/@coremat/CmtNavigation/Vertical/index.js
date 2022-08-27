import React from "react";
import { List } from "@material-ui/core";
import NavMenuItem from "./NavMenuItem";
import NavSection from "./NavSection";
import NavCollapse from "./NavCollapse";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Can from "../../../can";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  sideNavMenu: {
    position: "relative",
  },
}));

const CmtVertical = (props) => {
  const { menuItems } = props;
  const classes = useStyles();
  const { userProfile, modules } = useSelector(({ auth }) => auth);
  // const { subEstablishement } = useSelector(
  //   ({ EstablishmentsReducer }) => EstablishmentsReducer
  // );
  // console.log("CmtVertical", subEstablishement);

  return (
    <List component="nav" disablePadding className={classes.sideNavMenu}>
      {menuItems.map((item, index) => (
        <Can
          role={userProfile?.roleId}
          perform={`module-nav-${item.pathName}`}
          yes={() => (
            <Can
              role={userProfile?.roleId}
              perform="module-nav-access"
              data={{
                mod: item.pathName,
                moduleList: modules,
              }}
              yes={() => {
                switch (item.type) {
                  case "section":
                    return <NavSection {...item} key={index} />;
                  case "collapse":
                    return <NavCollapse {...item} key={index} />;
                  case "item":
                    return <NavMenuItem {...item} key={index} />;
                  default:
                    return null;
                }


              }}
            />
          )}
        />
      ))}
    </List>
  );
};

export default CmtVertical;
