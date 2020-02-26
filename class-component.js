
import {Component} from 'react';

class Foo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someRandomValue: 0
        };
        this.someMethod = this.someMethod.bind(this);       
    }
    render() {
        const {someRandomValue} = this.state;
        return <div>Value: {someRandomValue}</div>;
    }
    someMethod() {
        this.setState({someRandomValue: 9001});
    }
}