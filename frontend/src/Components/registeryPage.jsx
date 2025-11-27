import axios from "axios";
import FormComponent from "./formComponent";
import { useState } from "react";

export default function RegisteryPage() {
  //States
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");
  //Handles
  //Change data in form
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  //Handle registering a user
  const handleOnRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        ...formData,
      });
      setPostResponse(response.data.message);
    } catch (error) {
      console.log(error);
      setPostResponse(error.response.message || "Can not add username");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnRegister();
    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        currentPage={"register"}
        nextPage={""}
        postResponse={postResponse}
      />
    </div>
  );
}
