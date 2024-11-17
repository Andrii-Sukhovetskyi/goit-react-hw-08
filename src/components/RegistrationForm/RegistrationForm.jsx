import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Це поле обов'язкове"),
    email: Yup.string()
      .email("Неправильний формат email")
      .required("Це поле обов'язкове"),
    password: Yup.string()
      .min(6, "Пароль має бути не менше 6 символів")
      .required("Це поле обов'язкове"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
      })
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>Name</span>
              <Field name="name" />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>
            <label className={s.label}>
              <span>Email</span>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className={s.error} />
            </label>
            <label className={s.label}>
              <span>Password</span>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className={s.error} />
            </label>
            <button className={s.btn} type="submit" disabled={isSubmitting || isLoading}>
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>

      {error && <p className={s.error}>Помилка реєстрації: {error}</p>}
    </div>
  );
};

export default RegistrationForm;
