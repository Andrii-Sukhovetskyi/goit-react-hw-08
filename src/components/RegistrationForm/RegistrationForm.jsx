import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field name="name"></Field>
        </label>
        <label className={s.label}>
          <span>Email</span>
          <Field type="email" name="email"></Field>
        </label>
        <label className={s.label}>
          <span>Password</span>
          <Field type="password" name="password"></Field>
        </label>
        <button className={s.btn} type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;