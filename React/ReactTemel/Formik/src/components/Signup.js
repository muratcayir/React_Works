import { useFormik } from "formik";
import validationSchema from "../components/validations";



export default function Signup() {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: ""
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema
  });

  return (
    <div className="App">
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input name="email" value={values.email} onChange={handleChange} />
          {errors.email && touched.email && <div>{errors.email}</div>}
          <br />
          <br />

          <label>Password</label>
          <input
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && <div>{errors.password}</div>}
          <br />
          <br />
          <br />

          <label>Password Confirm </label>
          <input
            name="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <div>{errors.passwordConfirm}</div>
          )}
          <br /> <br />
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
          <code>{JSON.stringify(values)}</code>
        </form>
      </div>
    </div>
  );
}
