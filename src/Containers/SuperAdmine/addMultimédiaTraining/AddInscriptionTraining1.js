import React  from "react";
import { Modal, ModalBody } from "reactstrap";
import TextField from "@material-ui/core/TextField";
 import "react-circular-progressbar/dist/styles.css";
import Button from "@material-ui/core/Button";
 import { Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
export default function AddInscriptionTraining1(props) {
  

   const reinitialiser = () => {
    props.openInscriptionModal();
  };
 

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
  };
  const initialValues = {
    firstName: "",
    lastName: "",
  };
  const validationSchema = Yup.object({
    modeFinncement: Yup.string()
      .required("Champ obligatoire !")
      .matches(
        /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g,
        "Veuillez entrer un prénom valide"
      )
      .max(40, "Trop long ! maximum 40 caractères")
      .min(2, "Trop court! minimum 2 caractères"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Modal isOpen={props.openInscriptionModal}>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Form
            className="row "
            autoComplete="off"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <div className="d-flex flex-wrap justify-content-start flex-column col-lg-12 col-md-12 col-sm-6 ">
              <div
                className="d-flex justify-content-end  "
                style={{
                  color: "#4C25B7",
                  fontSize: "25px",
                }}
              >
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={reinitialiser}
                  style={{
                    marginTop: "-2%",
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ color: "#3f51b5", fontSize: "25px" }}
              >
                Inscription à la formation
              </div>
              <br />
              <br />

              <div className="p-2 d-flex flex-row ">
                <div className="p-2  d-flex flex-column col-md-10 col-sm-6 ">
                  <div style={{ fontSize: "18px", color: "#3f51b5" }}>
                    Quel est votre mode de financement?
                  </div>
                  <div>
                    <TextField
                      className="textfield"
                      margin="normal"
                      fullWidth
                      size="small"
                    ></TextField>
                  </div>
                </div>
              </div>

              {/*  bouttons */}
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
                    onClick={reinitialiser}
                  >
                    Annuler{" "}
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

                    // disabled={!(formik.isValid && formik.isSubmitting && verif===true)}
                  >
                    Confirmer
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalBody>
    </Modal>
  );
}
