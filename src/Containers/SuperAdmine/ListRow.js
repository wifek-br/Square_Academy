import React from "react";
import { TableCell, TableRow, Box } from "@material-ui/core";
   import { withStyles, makeStyles } from "@material-ui/core/styles";

 const useStyles = makeStyles((theme) => ({
  dialogRoot: {
    position: "relative",
  },
  dialogTitleRoot: {
    "& .MuiTypography-h6": {
      fontSize: 16,
      textTransform: "uppercase",
      color: "#5B13B4",
    },
  },
  dialogTitle: {
    "& .MuiTypography-h6": {
      fontSize: 30,
      color: "#5B13B4",
     // fontFamily: Fonts.MODLETITLE,
      opacity: 1,
    },
  },
  gridSubItem: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#9C9C9C",
    fontWeight: "300",
  },
  timetableType: {
    fontSize: 20,
    color: "#5B13B4",
   // fontFamily: Fonts.MODLETITLE,
    opacity: 1,
  },
  sectionTitle: {
    marginBottom: 12,
    marginTop: 12,
    fontSize: 14,
    //fontFamily: Fonts.SECTIONTITLE,
    color: "#b8b1f3",
  },
  dialogText: {
    fontSize: 11,
  },
  iconSectionTitle: {
    marginBottom: -2,
    fontSize: 16,
    marginRight: 5,
    color: "#5B13B4",
    opacity: 1,
  },
  iconActionRoot: {
    color: "#5B13B4",

  },
  titleRoot: {
    marginBottom: 2,
    fontSize: 14,
    letterSpacing: 0.25,
    fontWeight: 200,
    color: theme.palette.common.dark,
  },
  dataList: {
    marginBottom: 2,
    fontSize: 14,
    letterSpacing: 0.75,
    fontWeight: 300,
    color: "#4D4B4B",
   // fontFamily: Fonts.MODLETITLE,
  },
  saveButton: {
    color: "#FFFFFF",
    backgroundColor: "#5B13B4",
    fontSize: 16,
    font: "normal normal normal 16px/21px Futura LT",
    "&:hover": {
      backgroundColor: "#6F13DA",
    },
  },
  cancelButton: {
    color: "#B8B1F3",
    borderColor: "#B8B1F3",
    "&:hover": {
      borderColor: "#6F13DA",
      color: "#6F13DA",
    },
  },
  title: {
    top: 330,
    left: 342,
    width: 500,
    height: 52,
    textAlign: "left",
   // fontFamily: Fonts.PRIMARY,
    fontSize: 30,
    fontWeight: 52,
    letterSpacing: 1.25,
    color: "#2D2D2D",
    opacity: 1,
  },
  inputBackground: {
    backgroundColor: theme.palette.purple,
  },
  moduleNameButton: {
    fontFamily: "Futura LT, Regular",
    color: "#B8B1F3",
    borderColor: "#B8B1F3",
    backgroundColor: theme.palette.purple,
  },
  paramClassButton: {
    fontFamily: "Futura LT, Regular",
    borderColor: "#  e8e7f6",
    backgroundColor: theme.palette.purple,
  },

  submodulButton: {
    fontFamily: "Futura LT, Regular",
    fontSize: 12,
    color: "#6c5ce7",
    borderColor: "#5b13b4",
    marginBottom: 10,
    marginLeft: 5,
  },
  inactifSubmodulButton: {
    fontFamily: "Futura LT, Regular",
    fontSize: 12,
    color: "#5b13b4",
    borderColor: "#5b13b4",
    marginBottom: 10,
    marginLeft: 5,
    opacity: 0.4,
  },
  addModuleRoot: {
    color: theme.palette.common.white,
    border: `solid 1px ${theme.palette.common.white}`,
    backgroundColor: "#5b13b4",
    width: 10,
    cursor: "pointer",
  },
  titleWelcome: {
    //fontFamily: Fonts.MODLETITLE,
    color: "#5B13B4",
    marginTop: 60,
    height: 52,
    textAlign: "left",
    fontSize: 30,
    fontWeight: 52,
    letterSpacing: 1.25,
    opacity: 1,
  },
  subtitle: {
   // fontFamily: Fonts.MODLETITLE,
    marginTop: 5,
    color: "#666666",
    opacity: 0.55,
  },
  tr: {
    "&:hover,&:focus": {
      backgroundColor: theme.palette.purple,
    },
  },
  question: {
   // fontFamily: Fonts.MODLETITLE,
    // fontSize: 13.5,
  },
  chipRoot: {
    backgroundColor: theme.palette.purple,
    //  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    marginRight: 10,
    marginBottom: 12,
    height: 26,
    fontSize: 14,
    color: theme.palette.text.secondary,
    cursor: "pointer",
  },
  cancelChipBtn: {
    fontSize: 12,
    marginRight: 15,
    color: "#4D4B4B",
    cursor: "pointer",
  },
  TimeTableButton: {
    color: "#FFFFFF",
    backgroundColor: "#5B13B4",
    fontSize: 16,
    font: "normal normal normal 16px/21px Futura LT",
    textTransform: "capitalize",
    opacity: 1,

  },
  timetableAddEvent: {
    flexDirection: "row-reverse",
    fontSize: 13,
    color: "#5B13B4",
  //  fontFamily: Fonts.MODLETITLE,
    opacity: 1,
  },
  root: {
    borderBottom: "#5B13B4",
  },
  icon: {
    fill: "white",
  },
  fileDragDropTypo: {
    color: "#5B13B4",
    fontSize: "16px",
    textAlign: "center",
  },
  photo: {
    borderRadius: "5px",
  },
  helperText: {
    marginBottom: 5,
    color: "#666666",
    opacity: 0.32,
  },

  historicalTitle: {
    color: "#5B13B4",
    marginBottom: 15,
    fontSize: "18px",
    display: "flex",
    textAlign: "center",
  },

  serviceAffectedButton: {
    fontSize: 12,
    fontFamily: "Futura LT, Regular",
    color: "#666666",
    borderColor: "#B8B1F3",
    backgroundColor: theme.palette.purple,
  },
  flexGridItem: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
  },
  titleCardTypo: {
    color: "#5b13b4",
    fontSize: "20px",
    textTransform: "uppercase",
    fontWeight: 600,
    padding: 20,
  },
  contentTitleCardTypo: {
    paddingLeft: 5,
    fontFamily: "Futura LT, Bold",
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: 10,
    padding: 8,
  },
  importFileTextStyle: {
    "&.MuiButton-root:hover": {
      backgroundColor: "transparent",
    },
    color: "#6c5ce7",
    fontSize: 11,
  },
  importJustificationInput: {
    display: 'none',
  },
  textFieldRoot: {
    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderColor: alpha(theme.palette.common.dark, 0.12),

    // },
    "& .MuiFormControl-marginNormal": {
      marginTop: 0,
      marginBottom: 0
    }
  },
  labelIconService: {
    fontSize: 15,
    fontWeight: 600,
   // fontFamily: Fonts.SECTIONTITLE,
    color: "#4D4B4B"
  },
  autocompleteDisabledIcons: {
    "& .MuiIconButton-root.Mui-disabled":
    {
      color: 'transparent'

    }
  },

})); 
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.purple,
    },
  },
}))(TableRow);

const ListRow = ({
  row,
  isSelected,
 
}) => {
  const styleClasses = useStyles();
  

 
  const labelId = `enhanced-table-checkbox-${row.id}`;
  const isItemSelected = isSelected(row.id);
    return (
    <StyledTableRow
      hover
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.id}
      selected={isItemSelected}
    >
      <StyledTableCell />
      <StyledTableCell component="th" id={labelId} scope="row">
        data.1
      </StyledTableCell>
      <StyledTableCell className={styleClasses.dataList}>
      data.2
      </StyledTableCell>
      <StyledTableCell className={styleClasses.dataList}>
      data.
      3      </StyledTableCell>
      <StyledTableCell className={styleClasses.dataList}>
        data.4
      </StyledTableCell>
      <StyledTableCell className={styleClasses.dataList}>
     data.5
      </StyledTableCell>
      <StyledTableCell className={styleClasses.dataList}>
        <Box display="flex" alignItems="center" justifyContent="start">
          
          <div>data.6</div>
        </Box>{" "}
      </StyledTableCell>
      <StyledTableCell
        className={styleClasses.iconActionRoot}
        align="center"
        //onClick={(event) => event.stopPropagation()}
      >
         
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default React.memo(ListRow);
