import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Footer from "./components/Footer/Footer";
import { useFetchInitData } from "./hooks/useFetchInitData";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";

export const KeyboardContext = React.createContext({ bottomOffset: 0 });

function App() {
  const { backendResponse, loading } = useFetchInitData();
  const [bottomOffset, setBottomOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.clientHeight;

      if (viewportHeight < fullHeight) {
        setBottomOffset(fullHeight - viewportHeight);
      } else {
        setBottomOffset(0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading || !backendResponse) {
    return <LoadingScreen />;
  }

  return (
    <KeyboardContext.Provider value={{ bottomOffset }}>
      <div className="app-container">
        <Header />
        <WelcomePage initialRecords={backendResponse.postAuthResponse} />
        <Footer />
      </div>
    </KeyboardContext.Provider>
  );
}

export default App;
