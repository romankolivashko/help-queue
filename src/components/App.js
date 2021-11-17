import React from "react";
import Header from "./Header";
//import TicketLilst from "./TicketList";
import TicketControl from "./TicketControl";

function App(){
  // const name = "Potato";
  // const name2 = "Baley";

  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;