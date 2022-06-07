import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import ModeContext from "./ModeContext";
import AllPages from "./AllPages";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };

  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <ModeContext.Provider
          value={{ isDarkMode: isDarkMode, changeMode: this.changeMode }}
        >
          <AllPages isDarkMode={isDarkMode} changeMode={this.changeMode} />
        </ModeContext.Provider>
      </>
    );
  }
}

export default App;
