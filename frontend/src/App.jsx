import "./App.css";
import ContactsApp from "./Components/ContactsApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/loginPage";
import RegisteryPage from "./Components/registeryPage";
import NotAuthorizedPage from "./Components/notAuthorizedPage";
import PageNotFound from "./Components/pageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsApp />} />
          <Route path="/register" element={<RegisteryPage />} />
          <Route path="/not-authorized" element={<NotAuthorizedPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
