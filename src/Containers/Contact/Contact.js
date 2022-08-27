import React from "react";
import { InputBase } from "@material-ui/core";
import * as Yup from "yup";
import learn from "../Home/images/learn-vertical.jpg";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import { Formik, useFormik, Form } from "formik";

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
  email: Yup.string()
    .trim("Champ obligatoire !")
    .email("Entrer une adresse e-mail valide  ")
    .required("Champ obligatoire !"),
  telephoneNumber: Yup.string()
    .required("Champ obligatoire !")
    .matches(phoneRegExp, "Entrer un numéro valide")
    .max(40, "Trop long ! maximum 40 chiffres ")
    .min(6, "Trop court ! minimum 6 chiffres"),
  message: Yup.string()
    .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g, "Entrer une pays valide")
    .max(40, "Trop long ! maximum 40")
    .min(2, "Trop court! minimum 2"),
});
export const initialValues = {
  surname: "",
  name: "",
  email: "",
  telephoneNumber: "",
  message: "",
};
export default function Contact(props) {
  // let dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      //dispatch(addInscription(values));
      formik.resetForm({ values: "" });
    },
  });

  return (
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
                          Envoyez nous un email
                        </h3>
                      </div>
                      <Grid
                        container
                        spacing={{ xs: 2, sm: 6, md: 12 }}
                        sx={{ mb: 2 }}
                      >
                        <Grid item xs={12} sm={5} md={5}>
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
                        <Grid item xs={12} sm={5} md={5}>
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
                            name="name"
                            required
                            style={{
                              borderBottom: "1px solid  rgb(24,49,109)",
                            }}
                            fullWidth
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
                      </Grid>
                      <Grid
                        container
                        spacing={{ xs: 2, sm: 6, md: 12 }}
                        sx={{ m: 2 }}
                      >
                        <Grid item xs={12} sm={5} md={5}>
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            E-mail*
                          </h4>

                          <InputBase
                            fullWidth
                            type="email"
                            name="email"
                            required
                            style={{
                              borderBottom: "1px solid rgb(24,49,109)",
                            }}
                            {...formik.getFieldProps("email")}
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
                        <Grid item xs={12} sm={5} md={5}>
                          <h4
                            style={{
                              color: "rgb(24,49,109)",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            N° de téléphone*
                          </h4>
                          <InputBase
                            fullWidth
                            required
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
                      </Grid>
                      <Grid item xs={10} sm={6} md={6}>
                        <h4
                          style={{
                            color: "rgb(24,49,109)",
                            fontWeight: 400,
                            fontSize: "1rem",
                          }}
                        >
                          Message
                        </h4>
                        <br />
                        <textarea
                          name="message"
                          className="form-control"
                          style={{ maxWidth: "90%" }}
                          {...formik.getFieldProps("message")}
                          cols="15"
                          rows="4"
                          placeholder="Write your message"
                        ></textarea>

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
                              Envoyer
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
  );
}
