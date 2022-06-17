import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import UniversityList from './university/UniversityList';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route exact path="/list" component={UniversityList} />
    </Routes>
  </Router>
);

export default AppRouter;
