import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Return to Login</Link>
    </div>
  );
}
