import { Modal, ModalBody } from "reactstrap";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DateRangeComponent from "./DateRangeComponent";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "react-circular-progressbar/dist/styles.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { orange } from "@material-ui/core/colors";
import RemoveIcon from "@material-ui/icons/Remove";
import Programs from "./Programs";
import { useDispatch } from "react-redux";
import { addTraining } from "../../../redux/actions/Training";

export default function AddOnlineTraining(props) {
  const { values } = props;
  const themeList = [
    {
      value: "Design thinking",
      label: "Design thinking",
    },
    {
      value: "Soft skills",
      label: "Soft skills",
    },
    {
      value: "Marketing Degital",
      label: "Marketing Degital",
    },
    {
      value: "UX/UI Design",
      label: "UX/UI Design",
    },
  ];
  const number = parseInt(values.nbrDays);
  const formateurs = [
    { id: 1, firstName: " Hamrita", lastName: "Said" },
    { id: 2, firstName: "Wiem", lastName: "Ben Romdhane" },
    { id: 3, firstName: "Wifek ", lastName: "Ben Romdhane" },
    { id: 4, firstName: "Wissal", lastName: "Ben Romdhane" },
  ];

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      theme: values.theme,
      title: values.titleTraining,
      certificate: values.certificate,
      format: values.trainingFormat,
      description: values.descriptionTraining,
      link: values.linkTraining,
      trainer: values.trainer,
      descriptionFormer: values.descriptionFormer,
      methodology: values.methodology,
      location: values.placeTraining,
      objective: values.goal,
      prerequiste: values.Prerequisites,
      numberDay: values.nbrDays,
      modules: values.modules,
      levelsModules: values.levelsModules,
      program: values.levelsModules,
      price: values.price,
      sessions: values.sessions,
      fk_id_company: 1,
      creationDate: "",
      fk_id_creator: 1,
    };
    dispatch(addTraining(data));
    props.handleCancel();
  };
  return (
    <Modal isOpen={values.isOpen}>
      <ModalBody>
        <form className="row" autoComplete="off" onSubmit={handleSubmit}>
          <div className="d-flex flex-column col-lg-12 col-md-12 col-sm-12 ml-2 ">
            <div
              className="d-flex justify-content-end mt-2 ml-3"
              style={{
                color: "#4C25B7",
                fontSize: "25px",
              }}
              onClick={() => {
                props.openAddTraining();
                props.handleCancel();
              }}
            >
              <button
                type="button"
                className="close"
                aria-label="Close"
                style={{
                  marginTop: "0.1%",
                  marginRight: "3%",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="d-flex justify-content-center "
              style={{ color: "#3f51b5", fontSize: "25px" }}
            >
              Ajouter une formation
            </div>

            <br />
            <br />

            <div className="p-2 " style={{ fontSize: "20px" }}>
              <b>Informations générales</b>
            </div>
            {/* thème formation */}
            <div className="p-2 d-flex flex-row">
              <div className="p-2 flex-column col-md-5">
                <div
                  className="p-2"
                  style={{ color: "#3f51b5", fontSize: "18px" }}
                >
                  Thème de la formation *
                </div>
                <div className="p-2">
                  <TextField
                    select
                    required={true}
                    defaultValue=""
                    onChange={props.handleChange("theme")}
                    value={values.themeId}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  >
                    {themeList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
            </div>

            {/* session */}
            <div className="p-2 d-flex flex-row">
              <div className="p-2 flex-column">
                <div
                  className="p-2 "
                  style={{ color: "#3f51b5", fontSize: "18px" }}
                >
                  Ajouter une session *{" "}
                </div>
                {values.sessions.map((sessionItem, index) => (
                  <div className="p-2 d-flex flex-row">
                    <div className="p-2">
                      <DateRangeComponent
                        index={index}
                        setDate={props.setDate}
                        dateSession={sessionItem || ""}
                        key={index}
                      />
                    </div>
                    <div className="p-2 ml-2">
                      <Fab
                        size="small"
                        aria-label="Add"
                        value={`${index}`}
                        onClick={() => {
                          console.log("onClick", sessionItem);
                          if (!sessionItem.isAdded) {
                            if (sessionItem.startDate !== "") {
                              props.addNewChoice(index + 1, "sessions");
                            }
                          } else {
                            props.deleteChoice(index, "sessions");
                          }
                        }}
                      >
                        {sessionItem.isAdded ? (
                          <RemoveIcon style={{ color: orange[500] }} />
                        ) : (
                          <AddIcon style={{ color: orange[500] }} />
                        )}
                      </Fab>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* add modules */}
            <div className="p-2 d-flex flex-row">
              <div className="p-2 flex-column col-md-6">
                <div
                  className="p-2 "
                  style={{ color: "#3f51b5", fontSize: "18px" }}
                >
                  Ajouter un module *
                </div>

                {values.modules.map((moduleItem, index) => (
                  <div className="p-2 d-flex flex-row col-12  ">
                    <div className="p-2 d-flex col-10  ">
                      <TextField
                        className="textfield"
                        required={true}
                        id="module"
                        value={moduleItem.title || ""}
                        onChange={(e) =>
                          props.handleChangeModules(e, "title", index)
                        }
                        SelectProps={{}}
                        margin="normal"
                        fullWidth
                        size="small"
                        key={index}
                      />
                    </div>
                    <div className="p-2 col-10  ml-2">
                      <Fab
                        size="small"
                        aria-label="Add"
                        value={`${index}`}
                        onClick={() => {
                          if (!moduleItem.isAdded) {
                            if (moduleItem.title !== "") {
                              props.addNewChoice(index + 1, "modules");
                            }
                          } else {
                            props.deleteChoice(index, "modules");
                          }
                        }}
                      >
                        {moduleItem.isAdded ? (
                          <RemoveIcon style={{ color: orange[500] }} />
                        ) : (
                          <AddIcon style={{ color: orange[500] }} />
                        )}
                      </Fab>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* add level */}
            <div className=" d-flex flex-row">
              <div
                className="d-flex  col-md-5 col-5   justify-content-start"
                style={{ color: "#3f51b5", fontSize: "18px" }}
              >
                Ajouter un niveau &nbsp;
              </div>
              <div className="d-flex  col-md-1 justify-content-start align-items-start"></div>

              <div
                className="d-flex  col-md-5 col-5  justify-content-start"
                style={{ color: "#3f51b5", fontSize: "18px" }}
              >
                Associer à un module
              </div>
            </div>

            {values.levelsModules.map((item, index) => (
              <div className=" d-flex flex-row">
                <div className="d-flex flex-column  col-md-5 justify-content-center align-items-center">
                  <TextField
                    className="textfield"
                    id="levelName"
                    value={item.levelName || ""}
                    onChange={(e) =>
                      props.handleChangeLevelsModules(e, "levelName", index)
                    }
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
                <div className="p-2 ml-2">
                  <Fab
                    size="small"
                    aria-label="Add"
                    value={`${index}`}
                    onClick={() => {
                      console.log("onClick", item);
                      if (!item.isAdded) {
                        if (item.levelName !== "") {
                          props.addNewChoice(index + 1, "levelsModules");
                        }
                      } else {
                        props.deleteChoice(index, "levelsModules");
                      }
                    }}
                  >
                    {item.isAdded ? (
                      <RemoveIcon style={{ color: orange[500] }} />
                    ) : (
                      <AddIcon style={{ color: orange[500] }} />
                    )}
                  </Fab>
                </div>

                <div className="d-flex  flex-column col-md-5 justify-content-center align-items-center">
                  <TextField
                    defaultValue=""
                    className="textfield"
                    id="moduleName"
                    value={item.moduleName || ""}
                    onChange={(e) =>
                      props.handleChangeLevelsModules(e, "moduleName", index)
                    }
                    select
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  >
                    {values.modules.map((item) => (
                      <MenuItem key={item.id} value={item.value}>
                        {item.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
            ))}

            {/* certificat */}
            <div className="p-2 d-flex flex-row">
              <div
                className="p-2"
                style={{ color: "#3f51b5", fontSize: "18px" }}
              >
                Existe-t-il une certification ? *
              </div>
              <div className="ml-5">
                <RadioGroup
                  required={true}
                  className="d-flex flex-row"
                  aria-label="certificate"
                  name="certificate"
                  value={values.certificate}
                  onChange={props.handleChange("certificate")}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio color="primary" size="small" />}
                    label="Oui"
                  />

                  <FormControlLabel
                    value="false"
                    control={<Radio color="primary" size="small" />}
                    label="Non"
                  />
                </RadioGroup>
              </div>
            </div>
            {/* format formation */}

            <div className="p-2 d-flex flex-row">
              <div
                className="p-2"
                style={{ color: "#3f51b5", fontSize: "18px" }}
              >
                Quel est le format de la formation ? *
              </div>
              <div className="ml-5">
                <RadioGroup
                  required={true}
                  className="d-flex flex-row"
                  aria-label="trainingFormat"
                  name="trainingFormat"
                  value={values.trainingFormat}
                  onChange={props.handleChange("trainingFormat")}
                >
                  <FormControlLabel
                    value="INLINE"
                    control={<Radio color="primary" size="small" />}
                    label="En ligne"
                  />

                  <FormControlLabel
                    value="FACETOFACE"
                    control={<Radio color="primary" size="small" />}
                    label="Présentiel"
                  />
                  <FormControlLabel
                    value="HYBRID"
                    control={<Radio color="primary" size="small" />}
                    label="Hybride"
                  />
                </RadioGroup>
              </div>
            </div>
            {/* titre formation */}
            <div className="p-2 d-flex flex-row">
              <div className="  d-flex flex-column col-md-10">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Titre de la formation *
                </div>
                <div>
                  <TextField
                    className="textfield"
                    required={true}
                    id="titleTraining"
                    onChange={props.handleChange("titleTraining")}
                    value={values.titleTraining}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>
            </div>

            {/* description formation */}
            <div className="p-2 d-flex flex-row">
              <div className="p-2  d-flex flex-column col-md-10">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Description {" *"}
                </div>
                <div>
                  <TextField
                    className="textfield"
                    required
                    id="descriptionTraining"
                    onChange={props.handleChange("descriptionTraining")}
                    value={values.descriptionTraining}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>
            </div>

            {/*lien et lieu formation */}
            <div className="p-2 d-flex flex-row">
              <div className=" p-2 d-flex flex-column col-md-6">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>Lieu</div>
                <div>
                  <TextField
                    className="textfield"
                    id="placeTraining"
                    onChange={props.handleChange("placeTraining")}
                    value={values.placeTraining}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>

              <div className="p-2  d-flex flex-column col-md-6">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Lien de la formtion*
                </div>
                <div>
                  <TextField
                    required
                    className="textfield"
                    id="linkTraining"
                    onChange={props.handleChange("linkTraining")}
                    value={values.linkTraining}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>
            </div>

            {/* formateur & description */}
            <div className="p-2 d-flex flex-row ">
              <div className="p-2  d-flex flex-column col-md-6 ">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Formateur*
                </div>
                <div>
                  <TextField
                    defaultValue=""
                    required
                    className="textfield"
                    id="trainer"
                    onChange={props.handleChange("trainer")}
                    select
                    value={values.trainer}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  >
                    {formateurs.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.firstName} {item.lastName}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              <div className="p-2  d-flex flex-column col-md-6 ">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Description *
                </div>

                <div>
                  <TextField
                    className="textfield"
                    id="descriptionFormer"
                    onChange={props.handleChange("descriptionFormer")}
                    value={values.descriptionFormer}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>
            </div>

            {/* objectif & methodologie */}
            <div className="p-2 d-flex flex-row">
              <div className="p-2  d-flex flex-column col-md-6">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Objectif de la formation
                  {" *"}
                </div>
                <div>
                  <TextField
                    className="textfield"
                    id="goal"
                    required
                    onChange={props.handleChange("goal")}
                    value={values.goal}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>

              <div className="p-2  d-flex flex-column col-md-6">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Méthodologie
                </div>

                <div>
                  <TextField
                    className="textfield"
                    id="methodology"
                    onChange={props.handleChange("methodology")}
                    value={values.methodology}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>
            </div>
            {/* prérequis */}
            <div className="p-2 d-flex flex-row">
              <div className="p-2  d-flex flex-column col-md-6">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Prérequis
                </div>
                <div>
                  <TextField
                    className="textfield"
                    id="Prerequisites"
                    onChange={props.handleChange("Prerequisites")}
                    value={values.Prerequisites}
                    SelectProps={{}}
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>
            </div>
            {/* Programmes */}

            <div className="p-2 " style={{ fontSize: "20px" }}>
              <b>
                Programme
                {" *"}
              </b>
            </div>
            {/* nombre de jours */}
            <div className=" d-flex flex-row ">
              <div
                className="p-4 "
                style={{ color: "#3f51b5", fontSize: "18px" }}
              >
                Nombres de jours
              </div>
              <div className="ml-5 ">
                <TextField
                  id="nbrDays"
                  type="number"
                  onChange={props.handleChange("nbrDays")}
                  value={values.nbrDays}
                  SelectProps={{}}
                  margin="normal"
                  fullWidth
                  size="small"
                  inputProps={{ min: 1, max: 7 }}
                ></TextField>
              </div>
            </div>
            {[...Array(number)].map((item, index) => (
              <Programs
                key={index}
                index={index}
                item={item}
                {...props}
                values={values}
              />
            ))}
            <br />
            {/* prix */}
            <div className="p-2  d-flex flex-column ">
              <div className="p-2  d-flex flex-column col-md-6">
                <div style={{ color: "#3f51b5", fontSize: "18px" }}>
                  Prix de la formation par personne *
                </div>
                <div>
                  <TextField
                    type="number"
                    id="price"
                    onChange={props.handleChange("price")}
                    value={values.price}
                    SelectProps={{}}
                    required
                    margin="normal"
                    fullWidth
                    size="small"
                  ></TextField>
                </div>
              </div>
            </div>

            {/* les bouttons */}
            <div className="p-2 d-flex flex-row justify-content-center">
              <div className="p-2">
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    borderRadius: "80px",
                    fontSize: "18px",
                    fontFamily: " sans-serif",
                    textTransform: "none",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                  onClick={() => {
                    props.handleCancel();
                  }}
                >
                  Annuler
                </Button>
              </div>
              <div className="p-2 ml-3">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "80px",
                    fontSize: "18px",
                    fontFamily: " sans-serif",
                    textTransform: "none",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                  type="submit"
                  // onClick={() => {
                  //   handleSubmit();
                  // }}
                >
                  Confirmer
                </Button>
              </div>
            </div>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}
