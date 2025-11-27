import { Link } from "react-router-dom";

export default function NotAuthorizedPage() {
  return (
    <div>
      <h1>USER NOT AUTHORIZED! Be Gone!</h1>
      <Link to={"/"}>Back to Login</Link>
    </div>
  );
}
