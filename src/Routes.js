import React from "react";
import EmployeeList from "pages/EmployeeList";
import HomePage from "pages/HomePage";
import EmployeeCapablityMapping from "pages/EmployeeCapablityMapping";
import AddEmployee1 from "pages/AddEmployee1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/addemployee1" element={<AddEmployee1 />} />
        <Route
          path="/employeecapablitymapping"
          element={<EmployeeCapablityMapping />}
        />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/employeelist" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
