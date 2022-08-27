import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import useStyles from "./index.style";
import { CmtSubTitle, CmtTitle } from "../CmtTypography";
import { Box, Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";

const CmtMediaObject = ({
  video,
  avatarPos,
  avatarProps,
  onBodyClick,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  actionsComponent,
  content,
  contentProps,
  footerComponent,
  footerComponentProps,
  children,
  className,
  icon,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.mediaObject, "Cmt-media-object")} {...rest}>
      {video && (
        <Grid container spacing={2}>
          <Grid item xs={8}>
            {" "}
            {video && (
              <video
                controls
                autoPlay
                controlsList="nodownload"
                style={{ height: "auto", maxWidth: "100%" }}
              >
                <source src={video} type="video/mp4" />
              </video>
            )}
          </Grid>{" "}
          <Grid item xs={4}>
            <div>
              {/* <table
                className="table-responsive table-hover  table-striped  bg-dark"
                style={{ color: "white" }}
              >
                <thead>
                  <tr>
                    <th scope="col">
                      {" "}
                      {title && <CmtTitle content={title} {...titleProps} />}
                      {subTitle && (
                        <CmtSubTitle content={subTitle} {...subTitleProps} />
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      {!content && (
                        <div className="mb-3">
                          {typeof content === "string" ? (
                            <Typography {...contentProps}>{content}</Typography>
                          ) : (
                            content
                          )}
                        </div>
                      )}
                      {children}
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">Jacob</td>
                  </tr>
                  <tr>
                    <td colSpan="2" scope="row">Larry the Bird</td>
                  </tr>
                </tbody>
              </table> */}
              <table class="table table-striped table-dark">
  <thead>
    <tr>
       <th scope="col">Introduction</th>
     </tr>
  </thead>
  <tbody>
    <tr>
       <td>C'est quoi ubuntu ?</td>
     </tr>
    <tr>
       <td>Pour quoi on doit utiliser ubuntu ?</td>
     </tr>
    <tr>
       <td>Larry</td>
      </tr>
  </tbody>
</table>
            </div>{" "}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

CmtMediaObject.prototype = {
  onBodyClick: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitleProps: PropTypes.object,
  // actionsComponent: PropTypes.element,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  contentProps: PropTypes.object,
  // footerComponent: PropTypes.element,
  // footerComponentProps: PropTypes.object,
  // className: PropTypes.func,
};

CmtMediaObject.defaultProps = {
  avatar: "",
  avatarPos: "top",
  title: "",
  titleProps: {
    variant: "h3",
    component: "div",
  },
  subTitle: "",
  subTitleProps: {
    component: "span",
  },
  content: "",
  contentProps: {
    component: "div",
    variant: "body2",
  },
};

export default React.memo(CmtMediaObject);
