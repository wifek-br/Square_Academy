import React from "react";
import Box from "@material-ui/core/Box";
import CmtMediaObject from "../../../../@coremat/CmtMediaObject";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Fonts } from "../../../../@jumbo/constants/ThemeOptions";

const useStyles = makeStyles((theme) => ({
  productListItems: {
    display: "flex",
    border: `1px solid #D7D7AC `,
    borderRadius: 4,
    padding: 10,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "rgb(239,239,248)", //theme.palette.purple,
  },
  titleRoot: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    marginBottom: 12,

    fontSize: 14,
    fontFamily: Fonts.SECTIONTITLE,
    color: "  rgb(24,49,109)",
  },

  subTitleRoot: {
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: Fonts.SECTIONTITLE,
    marginTop: 4,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  },

  dateStyle: {
    // color: theme.palette.gris,
    color: "rgb(24,49,109)",
  },
}));

const ListItem = ({ item, ListeClassRoom }) => {
  const classes = useStyles();

  const getActionComponent = () => (
    <Box>
      <Box component="span" className={classes.dateStyle}>
        {moment(item.currentDate).format("DD-MM-YYYY")}
      </Box>
      <Box mt={5} style={{ textAlign: "end" }}></Box>
    </Box>
  );
  return (
    <React.Fragment>
      <Box className={clsx(classes.productListItems)}>
        <CmtMediaObject
          video={item?.filePath}
          title={item?.title}
          titleProps={{
            variant: "h4",
            component: "div",
            className: classes.titleRoot,
          }}
          subTitle={item?.description}
          subTitleProps={{
            variant: "subtitle2",
            component: "p",
            className: classes.subTitleRoot,
          }}
         // actionsComponent={getActionComponent()}
          content={
            <Box>
              <Box color="text.secondary">
                utilisateur: <br />
                {"Wissal Ben Romdhane"}
              </Box>
              <Box color="text.secondary">
                {" "}
                Classe :
                {item.classrooms.length === ListeClassRoom.length
                  ? "all"
                  : item.classrooms.map(
                      (classroom) => classroom.className + ", "
                    )}
              </Box>
            </Box>
          }
        />
      </Box>
    </React.Fragment>
  );
};

export default ListItem;
