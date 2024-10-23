// ThemeContext.js
import React, { createContext, Component, useContext } from 'react';

const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ isDarkMode: this.state.isDarkMode, toggleDarkMode: this.toggleDarkMode }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
