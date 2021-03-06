import React, { Component } from "react";

import Header from "./Header";
import Workers from "./Workers";
// import Timeline from './Timeline'
import Projects from "./Projects/Projects";
import PopupsNest from "./PopupsNest";
import ToastNest from "./ToastNest";

import ActivityToolbar from "./ActivityToolbar.js";
import Activities from "./Activities.js";

import { colors } from "../game/knowledge/colors";

class Layout extends Component {
    render() {
        return (
            <>
                <div className="background-image" />
                <div className="layout">
                    <Header data={this.props.data} newGame={this.props.newGame} />
                    <main className="dashboard">
                        <Workers data={this.props.data} />
                        <section className="activity card">
                            <ActivityToolbar data={this.props.data} />
                            <Activities data={this.props.data} />
                        </section>
                        <Projects data={this.props.data} />
                    </main>
                    <PopupsNest data={this.props.data} />
                    <ToastNest data={this.props.data} />
                </div>
            </>
        );
    }
}

export default Layout;
