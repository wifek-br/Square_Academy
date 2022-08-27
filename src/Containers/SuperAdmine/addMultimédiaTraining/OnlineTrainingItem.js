import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import AddInscriptionTraining2 from "./AddInscriptionTraining2";
import img1 from "../../Home/images/trainings/img1.jpg";
import img2 from "../../Home/images/trainings/img2.jpeg";
import img3 from "../../Home/images/trainings/img3.jpeg";
import img4 from "../../../Containers/Home/images/trainings/img4.jpeg";
import AddInscriptionTraining1 from "./AddInscriptionTraining1";
import styles from "./styleItem.css";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button1: {
    marginBottom: "7px",
    marginRight: "7px",
    borderRadius: "20px",
    textTransform: "none",
    padding: "5px 15px 5px 15px",
  },
  button2: {
    marginBottom: "7px",
    borderRadius: "20px",
    textTransform: "none",
  },
}));
export default function OnlineTrainingItem(props) {
  const classes = useStyles();
  const [favoris] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openShowTraining, setOpenShowTraining] = useState(false);

  const data = props.data;

  const openInscriptionModal = () => {
    setIsOpen(!isOpen);
  };
  var things = [img1, img2, img3, img4];
  var thing = things[Math.floor(Math.random() * things.length)];

  return (
    <Card
      className=" package bg-white shadow  "
      style={{
        borderRadius: "15px",
        transition: " .3s ease-in-out",
        marginTop:"10px"
      }}
    >
      <div className={styles.item}>
        <div className="package-items  " style={{ margin: "7%" }}>
          <div>
            <img
              src={thing}
              alt="formation"
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
          </div>

          <div
            style={{ fontSize: "20px", color: "#000000", marginBottom: "2%" }}
          >
            <strong>{data.theme} </strong>
            <br />
            {data.title}
          </div>

          <div
            style={{
              color: "grey",
            }}
          >
            <div className="d-flex justify-content-start">
              <strong>Formation</strong>
              <pre> </pre>
              {data.trainer}
            </div>
            <div className="d-flex justify-content-start">
              <strong>date de début</strong>
              <pre> </pre>
              {data.sessions[0].startDate.toString().slice(4, 16)}
            </div>
            <div className="d-flex justify-content-start">
              <strong>Durée</strong>
              <pre> </pre>
              {data.numberDay + " jours"}
            </div>
            <div>{data.description}</div>
          </div>
        </div>
        <div className="package-footer">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/showTraining" target="_blank">
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className={classes.button1}
              >
                <span className="justify-content-center"> {"Lireplus"}</span>
              </Button>
            </Link>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.button2}
              onClick={openInscriptionModal}
            >
              Registration
            </Button>
            <IconButton
              variant="outlined"
              aria-label="delete"
              className={classes.extendedIcon}
            >
              {favoris ? (
                <FavoriteIcon color="secondary" />
              ) : (
                <FavoriteBorderOutlinedIcon color="primary" />
              )}
              {/* secondary */}
            </IconButton>
          </div>{" "}
          {isOpen && (
            <AddInscriptionTraining1
              openInscriptionModal={openInscriptionModal}
            />
          )}
        </div>
      </div>
    </Card>
  );
}
