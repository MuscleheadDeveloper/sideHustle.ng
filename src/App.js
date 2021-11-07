import "./StyledComponents/App.css";
import Footer from "./Components/Footer";
import React from "react";
import Text from "./Components/Text";
import TopRight from "./Components/TopRight"
import Search from "./Components/Search";


function App() {
  return (
    <div className="app">
      <div className="form-container">
        <div className="topright">
          <TopRight />
        </div>
        <form className="form">
          <Search />
        </form>
        <div className="Text">
          <Text />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
