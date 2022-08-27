import React from "react";
import {
  Toolbar,
  Tooltip,
  IconButton,
  Button,
   Menu,
  MenuItem,
  
} from "@material-ui/core";
 
import clsx from "clsx";
   import { alpha, makeStyles } from "@material-ui/core/styles";
import { Fonts } from "../../@jumbo/constants/ThemeOptions";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingTop : 5,
    paddingBottom : 5

  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: alpha(theme.palette.secondary.light, 0.15),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: Fonts.SECTIONTITLE,
    letterSpacing: 1.5,
    // textTransform: "capitalize",
    color: "#666666",
  },
  spaceTitleToolbar: {
    marginLeft: "20px",
    fontSize: 15,
    fontWeight: 300,
    textTransform: "uppercase",
    color: "#5B13B4",
    fontFamily: Fonts.MODLETITLE,
  },
  chipsRoot: {
    display: "flex",
    justifyContent: "center",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  alignHedear: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  select:{
    width:"200px",
    paddingLeft:"15px"
  },
  date:{
    textTransform:"uppercase",
    fontSize :13,
    color:"#5B13B4",
    fontWeight:"300"
  }
}));
 
let filterOptionsList = [];
const UserTableToolbar = ({
  setSearchTerm,  hedearToolbar,onAdd,

   
}) => {
  const classes = useStyles();
   const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onFilterOptionClick = (option) => {
     
  };
 

 
   return (
    <React.Fragment>
      <Toolbar
        className={clsx(classes.root)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div className={classes.title} id="tableTitle">
          <div className={classes.alignHedear}>
            {hedearToolbar.title}
            <Button
              className={classes.spaceTitleToolbar}
            onClick={() => onAdd(true)}
            >
              {hedearToolbar.action}
            </Button>
          </div>
          <div className={classes.date}>
            {" "}
           
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          
         
        
           

          {/* <CmtSearch
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            border={false}
            onlyIcon
          /> */}
          {/* <div className={classes.chipsRoot}>
            {searchTerm && (
              <Chip label={searchTerm} onDelete={onSearchChipDelete} />
            )}
            {filterOptionsList.map(
              (option, index) =>
                filterOptions.includes(option.value) && (
                  <Chip
                    key={index}
                    label={option.label}
                    onDelete={() => onChipDelete(option)}
                  />
                )
            )}
          </div> */}
         
            <Tooltip title="Filter list">
              <IconButton aria-label="filter list" onClick={handleClick}>
                {/* <FilterListIcon className={classes1.iconActionRoot} /> */}
              </IconButton>
            </Tooltip>
       
          <Menu
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {filterOptionsList.map((option, index) => (
              <MenuItem key={index} onClick={() => onFilterOptionClick(option)}>
                {/* <Checkbox
                  checked={filterOptions.includes(option.value)}
                  inputProps={{ "aria-labelledby": option.label }}
                /> */}
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </React.Fragment>
  );
};

 
export default React.memo(UserTableToolbar);
