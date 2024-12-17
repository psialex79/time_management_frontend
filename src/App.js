import React from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Footer from "./components/Footer/Footer";
import { useFetchInitData } from "./hooks/useFetchInitData";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";

function App() {
  const { backendResponse, loading } = useFetchInitData();

  if (loading || !backendResponse) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      <Header />
      <WelcomePage initialRecords={backendResponse.postAuthResponse} />
      <Footer />
    </div>
  );
}

export default App;
