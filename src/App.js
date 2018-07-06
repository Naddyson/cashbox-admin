import React, { Component } from 'react';
import { getSessions } from './api'
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import HorizontalScroll from 'react-scroll-horizontal'
import axios from 'axios'
import Tables from './Tables';
import DatePicker from 'react-datepicker';
import moment from 'moment';

//const serverURL = 'https://magic-cashbox-server.herokuapp.com';
const serverURL = 'http://localhost:3001';



class App extends Component {
    current_date;
    constructor(props) {
        super(props);
        this.state = {
            current_date: moment(),
            all: 0,
            active: 0,
            sessions: [],
        }
    }

    componentDidMount(){
        this.getData();
    }
    getData = () => {
        let date = this.state.current_date;
        console.log('request')
        axios.post(`${serverURL}/get-sessions`, { year: date.format('YYYY'), month: date.format('MM'), day: date.format('DD')})
            .then( (res) => {
                console.log(res);
                this.setState({ sessions: res.data });
                setTimeout(this.getData, 2000);
            })
            .catch( error => {
                console.log(error.response);
            })
    };
    handleChangeDate = (date) => {
        this.setState({ current_date: date});
    }


    render() {
        console.log(this.state.current_date);
        let time = this.state.current_date.toLocaleString();

    return (
      <div className="App">
          <AppBar position="static" color="default">
              <Toolbar>
                  <Button color="inherit">Julius & Company</Button>
                  <DatePicker

                      selected={this.state.current_date}
                      onChange={this.handleChangeDate}
                  />
              </Toolbar>
          </AppBar>

           <Tables data={this.state.sessions}/>


      </div>
    );
  }
}

export default App;
