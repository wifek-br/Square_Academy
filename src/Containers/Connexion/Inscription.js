import { useState } from "react";
import Button from "@material-ui/core/Button";
import { InputBase } from "@material-ui/core";
import * as Yup from "yup";
import learn from "../Home/images/learn-vertical.jpg";
import Grid from "@mui/material/Grid";
import { Formik, useFormik, Form } from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

export const validationSchema = Yup.object().shape({
  surname: Yup.string()
    .trim("Champ obligatoire !")
    .required("Champ obligatoire !")
    .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g, "Entrer un nom valide"),

  name: Yup.string()
    .trim("Champ obligatoire !")
    .required("Champ obligatoire !")
    .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g, "Entrer un nom valide"),

  dateBirthUser: Yup.date().max(new Date(), "Entrer une date valide"),
  telephoneNumber: Yup.string()
    .trim("Champ obligatoire !")
    .required("Champ obligatoire !")
    .matches(phoneRegExp, "Entrer un numéro valide")
    .max(40, "Trop long ! maximum 40 chiffres ")
    .min(6, "Trop court ! minimum 6 chiffres"),

  password: Yup.string()
    .trim("Champ obligatoire !")
    .required("Champ obligatoire !")
    .min(8, "Trop court ! minimun 8"),
  password2: Yup.string()
    .trim("Champ obligatoire !")
    .required("Champ obligatoire !")
    .min(8, "Trop court ! minimun 8"),
});
export const initialValues = {
  surname: "",
  name: "",
  dateBirth: "",
  telephoneNumber: "",
  password: "",
  password2: "",
};

export default function Inscription() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClickShowPasssword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPasssword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      //dispatch(addInscription(values));
      formik.resetForm({ values: "" });
    },
  });
  return (
    <div style={{ backgroundColor: "#F8F8FD" }}>
      <div
        className="d-flex flex-column "
        style={{
          backgroundColor: "rgb(24,49,109)",
        }}
      >
        <div className="p-2 d-flex justify-content-center ">
          <div
            className="d-flex justify-content-center col-lg-7 col-md-7 col-sm-12  "
            style={{
              backgroundColor: "rgb(24,49,109)",
            }}
          >
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={false}
              >
                <Form onSubmit={formik.handleSubmit} noValidate>
                  <div
                    className="d-flex justify-content-center flex-wrap flex-row col-lg-12 col-md-12 col-sm-12  "
                    style={{
                      backgroundColor: "rgb(24,49,109)",
                    }}
                  >
                    <div
                      className="d-flex flex-wrap flex-column col-lg-6 col-md-12 col-sm-12   "
                      style={{
                        backgroundColor: "white",
                        paddingLeft: "7%",
                      }}
                    >
                      <div className="d-flex flex-wrap flex-column   mt-3">
                        <div className="d-flex   justify-content-center mt-4  mb-5 ">
                          <h3
                            style={{
                              color: "rgb(24,49,109)",
                              textAlign: "center",
                              position: "relative",
                              fontWeight: 500,
                              paddingRight: "7%",
                            }}
                          >
                            Créer un compte
                          </h3>
                        </div>

                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        >
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            Prénom*
                          </h4>

                          <InputBase
                            fullWidth
                            name="name"
                            required
                            style={{
                              borderBottom: "1px solid  rgb(24,49,109)",
                            }}
                            {...formik.getFieldProps("name")}
                          />
                          {formik.touched.name && formik.errors.name ? (
                            <div
                              className="error"
                              style={{ color: "red", fontSize: "11px" }}
                            >
                              <small>{formik.errors.name}</small>
                            </div>
                          ) : null}
                        </Grid>

                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        >
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            Nom*
                          </h4>
                          <InputBase
                            fullWidth
                            name="surname"
                            required
                            {...formik.getFieldProps("surname")}
                            style={{
                              borderBottom: "1px solid  rgb(24,49,109)",
                            }}
                          />
                          {formik.touched.surname && formik.errors.surname ? (
                            <div
                              className="error"
                              style={{ color: "red", fontSize: "11px" }}
                            >
                              <small>{formik.errors.surname}</small>
                            </div>
                          ) : null}
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        >
                          {" "}
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            N° de téléphone*
                          </h4>
                          <span style={{ color: "red", fontSize: "11px" }}>
                            Vous allez recevoir un SMS sur ce numéro, soyez sûr
                            qu'il est correct
                          </span>
                          <InputBase
                            fullWidth
                            type="text"
                            name="telephoneNumber"
                            {...formik.getFieldProps("telephoneNumber")}
                            style={{
                              borderBottom: "1px solid rgb(24,49,109)",
                            }}
                            inputProps={{
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                          />
                          {formik.touched.telephoneNumber &&
                          formik.errors.telephoneNumber ? (
                            <div
                              className="error"
                              style={{ color: "red", fontSize: "11px" }}
                            >
                              <small>{formik.errors.telephoneNumber}</small>
                            </div>
                          ) : null}
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        >
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            Date de naissance
                          </h4>
                          <InputBase
                            fullWidth
                            type="date"
                            name="dateBirth"
                            {...formik.getFieldProps("dateBirth")}
                            style={{
                              borderBottom: "1px solid rgb(24,49,109)",
                            }}
                          />
                          {formik.touched.dateBirth &&
                          formik.errors.dateBirth ? (
                            <div
                              className="error"
                              style={{ color: "red", fontSize: "11px" }}
                            >
                              <small>{formik.errors.dateBirth}</small>
                            </div>
                          ) : null}
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        >
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            Mot de passe*
                          </h4>

                          <InputBase
                            fullWidth
                            type="email"
                            name="password"
                            required
                            style={{
                              borderBottom: "1px solid rgb(24,49,109)",
                            }}
                            {...formik.getFieldProps("password")}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPasssword}>
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <div
                              className="error"
                              style={{ color: "red", fontSize: "11px" }}
                            >
                              <small>{formik.errors.password}</small>
                            </div>
                          ) : null}
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        >
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            Confirmer votre mot de passe*
                          </h4>
                          <InputBase
                            fullWidth
                            type="password2"
                            name="password2"
                            required
                            style={{
                              borderBottom: "1px solid rgb(24,49,109)",
                            }}
                            {...formik.getFieldProps("password2")}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton onClick={handleClickShowPasssword2}>
                                  {showPassword2 ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          {formik.touched.password2 &&
                          formik.errors.password2 ? (
                            <div
                              className="error"
                              style={{ color: "red", fontSize: "11px" }}
                            >
                              <small>{formik.errors.password2}</small>
                            </div>
                          ) : null}{" "}
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        ></Grid>
                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        ></Grid>
                        <Grid
                          item
                          xs={10}
                          sm={10}
                          md={10}
                          sx={{ mb: 2, mr: 3 }}
                        ></Grid>

                        <Grid item xs={10} sm={10} md={10}>
                          <Grid item className="mb-4 mr-3">
                            {" "}
                            <Button
                              className="d-flex justify-content-center form-control col-lg-10 col-md-10 col-sm-8 mt-3"
                              style={{
                                color: "#ffffff",
                                border: "none",
                                cursor: "pointer",
                                backgroundColor: "rgb(24,49,109)",
                                padding: "4px 22px 4px 22px",
                                borderRadius: "80px",

                                marginRight: "120px",
                              }}
                              type="submit"
                            >
                              <span
                                style={{
                                  textTransform: "none",
                                  fontSize: "18px",
                                  fontFamily: " sans-serif",
                                }}
                              >
                                S'inscrire
                              </span>
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                    <div
                      className="d-flex flex-wrap flex-column col-lg-5 col-md-12   "
                      style={{ backgroundImage: `url(${learn})` }}
                    ></div>{" "}
                  </div>

                  {/* <div className="col-lg-7 col-md-7 col-sm-3 mb-5 ">
            {/* {showMessage && (
                    <Alert
                      style={{
                        height: "8%",
                        //  maxHeight: "10%",
                      }}
                      id="alert"
                      severity="success"
                    >
                      {"alertMessage"}
                    </Alert>
                  )} */}
                  {/*    </div> */}
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
