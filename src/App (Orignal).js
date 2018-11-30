import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Person from './playground/es6classes.js';
import Counter from './playground/counter.js'
import VisibilityToggle from './playground/visibilityToggle.js'


import Action from './components/action.js';
import AddOptions from './components/addoptions.js'
import Header from './components/header.js';
import Options from './components/options.js';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }


    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);


    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }



        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }




    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div className="App">
                <Header title={title} subtitle={subtitle}/>
                <Action 
                  hasOptions={this.state.options.length > 0}
                  handlePick = {this.handlePick}
                  />
                <Options 
                  options={this.state.options}
                  handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOptions
                    handleAddOption = {this.handleAddOption}
                />              
                <Counter/>
                <VisibilityToggle/>
            </div>
        );
    }
}

export default App;