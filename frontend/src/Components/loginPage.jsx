import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "./formComponent";
import Cookies from "js-cookie";

export default function LoginPage() {
  //States
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [postResponse, setPostResponse] = useState("");

  //Navigating
  const navigate = useNavigate();

  //Handles
  //On change event
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  //Handle Login
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        ...formData,
      });
      setPostResponse(response.data.message);
      if (response.status === 201) {
        //Setting cookies
        Cookies.set("jwt-authorize", response.data.token);
        navigate("/contacts");
      }
    } catch (error) {
      setPostResponse(error.response.data.message || "Login Failed!");
    }
  };

  //Handle on submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        postResponse={postResponse}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        nextPage={"register"}
        currentPage={""}
      />
    </div>
  );
}
