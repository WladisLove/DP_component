import React, { Component } from 'react';
import DatePicker from "./components/DatePicker"
import moment from "moment"

const disabledDays = [new Date(2018, 6, 25), new Date(2018, 6, 26), new Date(2018, 7, 6), new Date(2018, 7, 7), 
  new Date(2018, 7, 9)];

class App extends Component {
  state = {
    date: new Date(),
  }

  render() {
    const {date} = this.state;

    return (
      <div className="App">
        <div style={{textAlign: "center"}}>
            {moment(date).format("DD-MMMM-YYYY")}
        </div>
        <DatePicker 
          value={date}
          onChange={newDate => this.setState({date: newDate})}
          numOfDays={6}
          disabledDays={disabledDays}
          //disabled
        />
      </div>
    );
  }
}

export default App;
