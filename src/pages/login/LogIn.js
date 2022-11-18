import { Button, FormGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import "../signup/SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { curentUser } from "../../redux/Action/action";

const LogIn = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const formHeandler = (event) => {
    const { name, value } = event.target;
    setLogInData({ ...logInData, [name]: value });
  };
  // console.log(logInData, "logInData");

  const selectedData = useSelector((state) => state.addTheUser.dataList);

  // console.log(selectedData, "selectedData");

  // const logInSubmited = () => {

  // };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logInHandler = (event) => {
    event.preventDefault();
    // console.log(logInData, "logInData");
    console.log(selectedData, "selectedData");
    const filterData = selectedData.filter(
      (item) =>
        item.email === logInData.email && item.password === logInData.password
    );
    // filterData.lenght > 0 && toast.error("Data Not Found"
    // filterData.length > 0
    //   ? navigate("/dashboard")
    //   :

    if (filterData.length > 0) {
      navigate("/dashboard");
      dispatch(curentUser(filterData));
    } else {
      toast.error("Data Not Found");
    }

    // console.log("filterData", filterData);

    setLogInData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="signUpBlock">
      <form className="signUpForm" onSubmit={logInHandler}>
        <ToastContainer />
        <h1 className="signUpFormHeader">Log in</h1>
        <div className="formInput">
          <FormGroup style={{ width: "100%" }}>
            <TextField
              id="outlined-basic-4"
              label="Email"
              variant="outlined"
              type="email"
              onChange={formHeandler}
              // defaultValue={logInData.email}
              value={logInData.email}
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
              // defaultValue={logInData.passWord}
              value={logInData.password}
              name="password"
              size="small"
            />
          </FormGroup>
          <FormGroup style={{ width: "100%" }}>
            <Button variant="contained" type="submit">
              Log In
            </Button>
          </FormGroup>
        </div>
      </form>
      <p style={{ margin: "0" }}>
        If You Don't Have Account ? <Link to="/">SignUp</Link>
      </p>
    </div>
  );
};

export default LogIn;
