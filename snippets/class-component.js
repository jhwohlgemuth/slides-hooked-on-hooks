import React, {Component} from 'react';

class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.tick = this.tick.bind(this);    
    }
    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.id);
    }
    render() {
        return <header>
            <div>Count: {this.state.count}</div>
        </header>;
    }
    tick() {
        this.setState({
            count: this.state.count + 1
        });
    }
}
export default Ticker;