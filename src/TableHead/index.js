import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import React from "react";
 import { withStyles } from "@material-ui/core/styles";
import { Fonts } from "../@jumbo/constants/ThemeOptions";

const StyledTableCell = withStyles(theme => ({
  head: {
    fontSize: 15,
    fontWeight: 700,
    fontFamily: Fonts.SECTIONTITLE,
    letterSpacing: 1,
    color: "#4D4B4B",
    opacity: 10,
    backgroundColor: "#E8E7F6"
  },
  body: {}
}))(TableCell);
function UserTableHead({ classes, order, orderBy, onRequestSort, headCells }) {
  const onSortOrderChange = property => event => {
  
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
 

        {headCells.map(headCell => (

          <StyledTableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}>
            {!headCell.withOutSort ?

              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={onSortOrderChange(headCell.id)}

              >
                <span className={classes.headStyle}>{headCell.label}</span>
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
              : <span className={classes.headStyle}>{headCell.label}</span>}
          </StyledTableCell>
        ))}
        <StyledTableCell className={classes.headStyle} align="center">
         actions
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

UserTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number
};

export default React.memo(UserTableHead);
