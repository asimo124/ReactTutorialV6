import React, { Component } from 'react';


class App extends Component {

    state = {
        displayBio: false
    };

    toggleDisplayBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        });
    };

    render() {

        return (
            <div >
                <h1>Alex Hawley</h1>
                <p>This is my portfolio</p>
                <p>I enjoy working on interesting projects.</p>
                {
                    (this.state.displayBio) ? (
                        <div >
                            <p>I live in San Antonio</p>
                            <p>I love front end javascript frameworks like Angular, React, and Vue.js</p>
                            <p>I playing pool and riding scooters.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div >
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default App;
