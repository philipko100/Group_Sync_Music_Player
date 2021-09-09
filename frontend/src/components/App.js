import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import RoomSettingsPage from "./RoomSettingsPage";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="centerPage">
                <HomePage />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App name="Philip"/>, appDiv);