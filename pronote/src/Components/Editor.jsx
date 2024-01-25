import React, { Component } from 'react';
import './Editor.css';

class Editor extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div id="container">
                <div id="input-container">
                    <h2>Input</h2>
                    <textarea
                        id="input"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </div>
                <div id="pronote-container">
                    <h2>Pro Note</h2>
                    <div
                        id="pronote">
                        {this.state.value}
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;
