import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashbord from "./pages/students/dashbord";
import Studentpage from "./pages/students/studentpage";
import Subjectpage from "./pages/students/subjectpage";
import Exams from "./pages/students/Exams";
import Paymentpage from "./pages/students/paymentpage";
import Dashbordadmin from "./pages/admin/Dashbordadmin.jsx";
import Layout from "./components/layout";
import AddSubject from "./pages/students/addsubject.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/Dashbordadmin" element={<Dashbordadmin />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/addsubject" element={<AddSubject />} />
        <Route path="/students" element={<Studentpage />} />
        <Route path="/subjects" element={<Subjectpage />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/payments" element={<Paymentpage />} />
      </Route>
    </Routes>
  );
}

export default App;
