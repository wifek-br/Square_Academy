import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import { InputBase } from "@material-ui/core";
import * as Yup from "yup";
import learn from "../Home/images/learn-vertical.jpg";
import Grid from "@mui/material/Grid";
import { Formik, useFormik, Form } from "formik";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim("Champ obligatoire !")
    .required("Champ obligatoire !")
    .email("Entrer une adresse e-mail valide  "),

  password: Yup.string()
    .trim("Champ obligatoire !")
    .required("Champ obligatoire !")
    .min(8, "Trop court ! minimum 8"),
});
export const initialValues = {
  email: "",

  password: "",
};
export default function Connexion() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPasssword = () => {
    setShowPassword(!showPassword);
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
                            Bienvenue !
                          </h3>
                        </div>
                        <Grid
                          container
                          spacing={{ xs: 2, sm: 6, md: 12 }}
                          sx={{ mb: 2 }}
                        >
                          <Grid item xs={10} sm={10} md={10}>
                            <h4
                              style={{
                                color: "rgb(24,49,109)",
                                fontWeight: 400,
                                fontSize: "1rem",
                              }}
                            >
                              Email*
                            </h4>

                            <InputBase
                              fullWidth
                              name="email"
                              required
                              {...formik.getFieldProps("email")}
                              style={{
                                borderBottom: "1px solid  rgb(24,49,109)",
                              }}
                            />
                            {formik.touched.email && formik.errors.email ? (
                              <div
                                className="error"
                                style={{ color: "red", fontSize: "11px" }}
                              >
                                <small>{formik.errors.email}</small>
                              </div>
                            ) : null}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={{ xs: 2, sm: 6, md: 12 }}
                          sx={{ m: 2 }}
                        >
                          <Grid item xs={10} sm={10} md={10}>
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
                                  <IconButton
                                    onClick={handleClickShowPasssword}
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                            />
                            {formik.touched.password &&
                            formik.errors.password ? (
                              <div
                                className="error"
                                style={{ color: "red", fontSize: "11px" }}
                              >
                                <small>{formik.errors.password}</small>
                              </div>
                            ) : null}
                          </Grid>
                        </Grid>
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
                                Se connecter
                              </span>
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} className="mb-5  ">
                          <Link to="#" color="inherit">
                            mot de passe oublié
                          </Link>
                        </Grid>
                        <Grid item xs={10} sm={10} md={10} className="mb-5  ">
                          Vous n'avez pas de compte ?
                          <Link to="/inscription" color="inherit">
                            {"  "} S’inscrire
                          </Link>
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
