import React, { useState } from "react";
 import CmtGridView from "../../../@coremat/CmtGridView";
import CmtCard from "../../../@coremat/CmtCard";
import CmtCardContent from "../../../@coremat/CmtCard/CmtCardContent";
import ListItem from "./MultimediaCard/ListItem";
 import NoRecordFound from "../../../CommonComponents/NoRecordFound";
import {
  TableBody,
  Table,
  TableCell,
  TableRow,
  Paper,
  TableContainer,
} from "@material-ui/core";
import TableToolbar from "../TableToolbar";

import { lighten, makeStyles } from "@material-ui/core/styles";
const hedearToolbar = {
  title: "  formation",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(4),
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
  },
  container: {
    maxHeight: 700,
  },
  table: {
    minWidth: 750,
  },
  item: {
    //   width: "45%",
  },
}));
export default function ListeFormations() {
  const classes = useStyles();
    const [selected, setSelected] = useState([]);
  const [isFilterApplied] = useState(false);
  const [multimediaFetched] = useState(false);
 
  const multimedias = [
    {
      id: 2,
      title: "React",
      filePath:
        "https://educap-storage.s3.amazonaws.com/ADN/Educap/2024-2025/7/6%C3%A8me/Supports%20multim%C3%A9dia/MATH/React_Tue%2C%2016%20Aug%202022%2011%3A12%3A14%20GMT.webm",
      description: "React",
      currentDate: "2022-08-16T11:12:16.887Z",
      status: true,
      creationDate: "2022-08-16T11:12:16.887Z",
      archiveDate: null,
      classrooms: [
        {
          id: 1,
          className: "6ème",
          studentNumber: 15,
          level: [{ id: 1, levelName: "7", status: true }],

          section: null,
        },
        {
          id: 2,
          className: "7ème",
          studentNumber: 20,
          level: [
            {
              id: 1,
              levelName: "7",
              status: true,
            },
          ],
          section: null,
        },
      ],
      subject: [
        {
          id: 2,
          subjectName: "MATH",
          subjectIcon: "string",
          subjectModule: [
            {
              id: 1,
              subjectModuleName: "Math",
            },
          ],
        },
      ],
      createdBy: [
        {
          id: "8182db2d-baa4-43dc-a7a6-376fe6832ca2",
          email: "wifek.benromdhane@gmail.com",
          firstName: "Wifek",
          lastName: "BR",
          address: "address",
          phone: "+21695302880",
          whatsappPhone: "22332444",
          civility: "Mademoiselle",
          photo: "photo",
          communicationChannel: "Téléphone",
          bloodGroup: "O+",
          isFirstConnexion: false,
          roleId: 2,
        },
      ],
    },
  ];
  const classrooms = [
    {
      id: 1,
      className: "6ème",
      studentNumber: 15,

      level: [{ id: 1, levelName: "7", status: true }],
      schoolYear: [
        {
          id: 4,
          year: "2024-2025",
          startDate: "2024-10-01T07:00:00.000Z",
          endDate: "2025-06-30T23:00:00.000Z",
        },
      ],
      classroomParams: [
        {
          subject: [{}],
          professor: [
            {
              id: 4,
              medicalBackground: "ww",
              contractType: "CDD",
              dateStartContract: "2022-08-10T13:20:50.737Z",
              dateEndContract: "2022-10-27T13:20:00.000Z",
            },
          ],
        },
      ],
      studentAffectation: [{}],
      section: null,
    },
  ];
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          selected={selected}
          setSelected={setSelected}
          // onAdd={setOpenMultimediaDialog}
          // filterOptions={filterOptions}
          // setFilterOptions={setFilterOptions}
          // searchTerm={searchTerm}
          // setSearchTerm={setSearchTerm}
          hedearToolbar={hedearToolbar}
        />
        {multimedias.length ? (
          <CmtCard>
            <CmtCardContent>
              <CmtGridView
                itemPadding={24}
                className="d-flex justify-content-start"
                style={{ paddingRight: "10px" }}
                responsive={{
                  xs: 1,
                  sm: 1,
                  md: 2,
                  lg: 2,
                  xl: 2,
                }}
                data={multimedias}
                renderRow={(item, index) => (
                  <ListItem
                    key={index}
                    item={item}
                    //     //onSupportMultimediaEdit={handleSupportMultimediaEdit}
                    //     //onSupportMultimediaView={handleMultimediaView}
                    //     //onSupportMultimediaDelete={handleSupportDelete}
                    //   user={userProfile}
                    ListeClassRoom={classrooms}
                  />
                )}
              />
              
            </CmtCardContent>
          </CmtCard>
        ) : (
          <TableContainer className={classes.container}>
            <Table
              stickyHeader
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="sticky enhanced table"
            >
              <TableBody>
                <TableRow style={{ height: 53 * 6, alignItems: "center" }}>
                  <TableCell colSpan={7} rowSpan={10}>
                    {isFilterApplied ? (
                      <NoRecordFound>"non résultat"</NoRecordFound>
                    ) : (
                      <NoRecordFound>
                        {multimediaFetched ? "non données" : "non données"}
                      </NoRecordFound>
                    )}
                  </TableCell>
                </TableRow>{" "}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </div>
  );
}
