import "./App.css";
import React, { useState } from "react";
import Navbar from "./compnents/Navbar";
import News from "./compnents/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = (props) => {
  const [progress, setProgress] = useState(0);

const  setProgressFun = (progress) => {
    setProgress(progress);
  };
 const pageSize = 15;

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <LoadingBar color="#f11946" progress={progress} />
        <div className="container">
          <Routes>
            <Route>
              <Route
                exact
                path="/"
                element={
                  <News
                      setProgress={setProgressFun}
                    key="general"
                    pageSize={pageSize}
                    country="in"
                    category="general"
                  ></News>
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={setProgressFun}
                    key="entertainment"
                    pageSize={pageSize}
                    country="in"
                    category="entertainment"
                  ></News>
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                      setProgress={setProgressFun}
                    key="business"
                    pageSize={pageSize}
                    country="in"
                    category="business"
                  ></News>
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                      setProgress={setProgressFun}
                    key="health"
                    pageSize={pageSize}
                    country="in"
                    category="health"
                  ></News>
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={setProgress}
                    key="science"
                    pageSize={pageSize}
                    country="in"
                    category="science"
                  ></News>
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                      setProgress={setProgressFun}
                    key="sports"
                    pageSize={pageSize}
                    country="in"
                    category="sports"
                  ></News>
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                      setProgress={setProgressFun}
                    key="technology"
                    pageSize={pageSize}
                    country="in"
                    category="technology"
                  ></News>
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
