import React, { useState } from "react";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import { FormGroup, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    password: "",
    comformpassword: "",
  });

  const [shoeErre, setShowerre] = useState(false);
  // const [formErre, setFormErre] = useState(false)

  // console.log(formData, "formData");
  const formHeandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const formErre = (event) => {
    event.preventDefault();
    formData.firstname &&
    formData.lastname &&
    formData.age &&
    formData.email &&
    formData.password &&
    formData.comformpassword
      ? formSubmitHeandler()
      : toast.error(
          !formData.firstname
            ? "Please Enter Your FristName"
            : !formData.lastname
            ? "Please Enter Your LastName"
            : !formData.email
            ? "Please Enter Your Email"
            : !formData.age
            ? "Please Enter Your Age"
            : !formData.password
            ? "Please Enter Your Password"
            : !formData.comformpassword
            ? "Please Enter Your conform Password"
            : ""
        );
  };

  const formSubmitHeandler = () => {
    if (Number(formData.age) > 18) {
      setShowerre(false);
      passWordHeadle();
    } else {
      setShowerre(true);
    }
  };

  const passWordHeadle = () => {
    formData.password === formData.comformpassword
      ? formSubmited()
      : toast.error("your password have a match");
  };

  const formSubmited = () => {
    console.log(formData);
    setFormData({
      firstname: "",
      lastname: "",
      age: Number,
      email: "",
      password: "",
      comformpassword: "",
    });
    // console.log(formData);
  };

  return (
    <>
      <div className="signUpBlock">
        <form className="signUpForm" onSubmit={formErre}>
          <ToastContainer />
          <h1 className="signUpFormHeader">Sign Up</h1>
          <div className="formInput">
            <FormGroup style={{ width: "100%" }}>
              <TextField
                id="outlined-basic-1"
                label="FirstName"
                variant="outlined"
                type="text"
                onChange={formHeandler}
                // defaultValue={formData.firstName}
                value={formData.firstname}
                name="firstname"
                size="small"
              />
            </FormGroup>
            <FormGroup style={{ width: "100%" }}>
              <TextField
                id="outlined-basic-2"
                label="LastName"
                variant="outlined"
                type="text"
                onChange={formHeandler}
                // defaultValue={formData.lastNmae}
                value={formData.lastname}
                name="lastname"
                size="small"
              />
            </FormGroup>
            <FormGroup style={{ width: "100%" }}>
              <TextField
                id="outlined-basic-3"
                label="Age"
                variant="outlined"
                type="number"
                onChange={formHeandler}
                // defaultValue={formData.age}
                value={formData.age}
                name="age"
                size="small"
              />
              {shoeErre ? (
                <span className="ageErre">Age Should Be Greater Than 18</span>
              ) : (
                ""
              )}
            </FormGroup>

            <FormGroup style={{ width: "100%" }}>
              <TextField
                id="outlined-basic-4"
                label="Email"
                variant="outlined"
                type="email"
                onChange={formHeandler}
                // defaultValue={formData.email}
                value={formData.email}
                name="email"
                size="small"
              />
            </FormGroup>
            <FormGroup style={{ width: "100%" }}>
              <TextField
                id="outlined-basic-5"
                label="Password"
                variant="outlined"
                type="password"
                onChange={formHeandler}
                // defaultValue={formData.passWord}
                value={formData.password}
                name="password"
                size="small"
              />
            </FormGroup>
            <FormGroup style={{ width: "100%" }}>
              <TextField
                id="outlined-basic-6"
                label="Comform Password"
                variant="outlined"
                type="password"
                onChange={formHeandler}
                // defaultValue={formData.passWord}
                value={formData.comformpassword}
                name="comformpassword"
                size="small"
              />
            </FormGroup>
            <FormGroup style={{ width: "100%" }}>
              <Button variant="contained" type="submit">
                Sign Up
              </Button>
            </FormGroup>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
