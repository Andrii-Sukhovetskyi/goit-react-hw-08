import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(
      addContact({
        name,
        number,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name"></Field>
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number"></Field>
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={s.btn} type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;