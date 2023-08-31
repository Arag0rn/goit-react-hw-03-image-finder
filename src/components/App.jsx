import { Component } from "react";
import { Searchbar } from "./Searchbar";
import {GlobalStyle} from "./GlobalStyle.styled"
export class App extends Component{
  state = {
 
  
  }

  render() {
    const appStyles = {
      display: "grid",
      gridTemplateColumns: "1fr", 
      gridGap: "16px", 
      paddingBottom: "24px", 
    };

    return (
      <div style={appStyles}>
        <Searchbar />
        <GlobalStyle />
    </div>
  );}
}
