import React, {Component} from 'react';

export default class Default extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.jsonList();
    }

    jsonList() {
        fetch('http://localhost:8080/api/dataset.json').then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                data: json
            });
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });
    }

    render() {
        var datass = this.state.data
        var arr = [];
        for(var i = 0; i < datass.length; i++){
            arr.push(datass[i])
        }
        console.log(arr);
        return (
            <ul>
                {arr.map((item, key) => <Test key={key} data={item} />)}
            </ul>
        );
    }

}

class Test extends Component {
    render(){
        return (
            <li>{this.props.data.Name}</li>
        )
    }
}
