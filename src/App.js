import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Footer from "./components/Footer/Footer";
import AddRecordPage from "./components/AddRecordPage/AddRecordPage";
import { useFetchInitData } from "./hooks/useFetchInitData";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";

function App() {
  const { backendResponse, loading } = useFetchInitData();
  const [submitHandler, setSubmitHandler] = useState(null);
  const [isFormValid, setFormValid] = useState(false);

  if (loading || !backendResponse) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <WelcomePage initialRecords={backendResponse.postAuthResponse} />
            }
          />
          <Route
            path="/add-record"
            element={
              <AddRecordPage
                setSubmitHandler={setSubmitHandler}
                setFormValid={setFormValid}
              />
            }
          />
        </Routes>
        <Footer submitHandler={submitHandler} isFormValid={isFormValid} />
      </div>
    </Router>
  );
}

export default App;
