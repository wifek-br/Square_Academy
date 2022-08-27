import React, { useState } from "react";
import AddTraining from "../addMultimédiaTraining/AddTraining";
import TableHead from "../../../TableHead";
import {
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { getComparator, stableSort } from "../../../@jumbo/utils/tableHelper";
import ListRow from "../ListRow";
import TableToolbar from "../TableToolbar";
import OnlineTrainingItem from "./OnlineTrainingItem";

export const headCellsCollaborator = [
    {
      id: "user.functionName",
      withOutSort: false,
      numeric: false,
      disablePadding: true,
      label: "Thème de la formation",
    },
    {
      id: "lastName",
      withOutSort: true,
      numeric: false,
      disablePadding: true,
      label: "colonne 2",
    },
    {
      id: "firstName",
      withOutSort: true,
      numeric: false,
      disablePadding: true,
      label: "colonne 3",
    },
    {
      id: "date",
      withOutSort: true,
      numeric: false,
      disablePadding: false,
      label: "Colonne 4",
    },
    {
      id: "type",
      numeric: false,
      disablePadding: false,
      label: "Colonnne 5",
    },
    {
      id: "justification",
      numeric: false,
      disablePadding: false,
      label: "Colonne 6",
    },
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
  
    container: {
      maxHeight: 700,
    },
    table: {
      minWidth: 750,
    },
  
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
    documentTitleStyle: {
      color: "#666666",
    },
    socialLink: {
      display: "flex",
      alignItems: "center",
      marginLeft: -8,
      marginRight: -8,
    },
    socialLinkCol: {
      paddingLeft: 8,
      paddingRight: 8,
      "& .btn": {
        backgroundColor: "#E8E7F6",
        color: theme.palette.primary.main,
        padding: 6,
      },
    },
  }));
  export const hedearToolbarCollaborator = {
    title: "Hello Super Admine",
    action: "Ajouter une formation",
  };
export default function List() {
    const [openadd, setOpenadd] = useState(false);
    const [order, setOrder] = useState("desc");
    const [orderBy, setOrderBy] = useState("id");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
      const handlePageChange = (event, newPage) => {
        setPage(newPage);
      };
      const openaddAgence = () => {
        setOpenadd(!openadd);
      };
      const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrderBy(property);
        setOrder(isAsc ? "desc" : "asc");
      };
      const classes = useStyles();
      const userList = [];
      const [selected, setSelected] = useState([]);
      const isSelected = (id) => selected.indexOf(id) !== -1;
    
    
    
      return (
    <div className="p-2 ml-auto ">
    {openadd && <AddTraining openaddAgence={openaddAgence} />}

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          selected={selected}
          setSelected={setSelected}
          onAdd={setOpenadd}
          // onAdd={setIsOpenDialog}

          // searchTerm={searchTerm}
          // setSearchTerm={setSearchTerm}
          hedearToolbar={hedearToolbarCollaborator}
        />
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="sticky enhanced table"
          >
            <TableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCellsCollaborator}
            />
            <TableBody>
              {!!userList.length ? (
                stableSort(userList, getComparator(order, orderBy))
                  .slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )

                  .map((row, index) => (
                    <ListRow
                      key={index}
                      row={row}
                      isSelected={isSelected}
                      // onAbsenceEdit={handleAbsenceEdit}
                      // onAbsenceDelete={handleAbsenceDelete}
                    />
                  ))
              ) : (
                <TableRow style={{ height: 53 * 6 }}>
                  <TableCell colSpan={7} rowSpan={10}>
                    {/* {isFilterApplied ? (
              <NoRecordFound>
                <IntlMessages id="NoRecordFound.with.filter" />
              </NoRecordFound>
            ) : (
              <NoRecordFound>
                {usersFetched ? (
                  <IntlMessages id="NoRecordFound" />
                ) : (
                  <IntlMessages id="Loading.users" />
                )}
              </NoRecordFound>
            )} */}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />{" "}
      </Paper>
    </div>
  </div>
  )
}
