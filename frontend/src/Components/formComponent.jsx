import { useNavigate } from "react-router-dom";

export default function FormComponent({
  formData,
  handleOnSubmit,
  handleOnChange,
  currentPage,
  nextPage,
  postResponse,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{currentPage}</h1>
      <form action="" onSubmit={handleOnSubmit} method="POST">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="UserName"
          value={formData.username}
          onChange={handleOnChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleOnChange}
        />{" "}
        <br />
        <button>Submit</button>
      </form>

      <p>{postResponse}</p>
      <button onClick={() => navigate(`/${nextPage}`)}>
        {nextPage === "" ? "Login Page" : "Register Here"}
      </button>
    </div>
  );
}
