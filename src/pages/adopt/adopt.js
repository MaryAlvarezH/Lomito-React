import React, {Component,Fragment} from 'react'
import AdoptView from './adoptView';
const URL = 'http://localhost:4001';

class Adopt extends Component {
    state = {
        pets:[]
    }

    async componentDidMount() {
        const raw = await this.handleData()
        const pets = await raw.json()
        this.setState({ pets });
    }

    handleData = (model = 'pets') => {
        let url = `${URL}/${model}`
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    
        return fetch(`${url}`,headers)
    }

    render() {
        return (
            <Fragment> 
                <AdoptView petList={this.state.pets}></AdoptView>
            </Fragment>
        )
    }
}

export default Adopt