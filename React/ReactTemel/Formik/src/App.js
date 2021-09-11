import React from "react";
import { useFormik } from "formik";

export default function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "Murat",
      lastName: "ÇAYIR",
      email: "mrtcayir@hotmail.com",
      gender: "female",
      hobies: [],
      country: "tr",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="Jane"
          /><br /> <br />

          <label htmlFor="lastName">Last Name</label>
          <input name="lastName"  value={values.lastName} onChange={handleChange}placeholder="Doe"/>
          <br /> <br />

          <label htmlFor="email">Email</label>
          <input name="email" value={values.email} onChange={handleChange} placeholder="jane@acme.com" type="email"/>
          <br /><br /><br />

          <span>Male</span>
          <input type="radio" name="gender" value="male" checked={values.gender === "male"} onChange={handleChange}/>

          <span>Female</span>
          <input type="radio" name="gender" value="female" checked={values.gender === "female"} onChange={handleChange}/>
          <br/><br /><br />
          <button type="submit">Submit</button>
          <br /><br /><br />
          <div>
            <input
              type="checkbox"
              name="hobies"
              value="Cinema"
              onChange={handleChange}
            />
            Cinema
          </div>
          <div>
            <input
              type="checkbox"
              name="hobies"
              value="Football"
              onChange={handleChange}
            />
            Football
          </div>
          <div>
            <input
              type="checkbox"
              name="hobies"
              value="Ping-Pong"
              onChange={handleChange}
            />
            Ping-Pong
          </div>
          <br />
          <br />
          <br />
          <select name="country" onChange={handleChange} value={values.country}>
            <option value="tr">Turkey</option>
            <option value="at">Austria</option>
            <option value="fr">French</option>
          </select>
          <br />
          <br />
          <br />
          {JSON.stringify(values)}
        </form>
      </div>
    </div>
  );
}
