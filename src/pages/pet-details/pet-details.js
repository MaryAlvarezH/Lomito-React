import React, {Component,Fragment} from 'react'
import PetDetailsView from './pet-details-View';
const URL = 'http://localhost:4001';

class PetDetails extends Component{
    state = {
        activities: []
    }

    async componentDidMount() {
        const raw = await this.handleData()
        const activities = await raw.json()

        this.setState( {activities} );
    }

    handleData = (data, method = 'GET', model = 'activity') => {
        let config = {};
        let url = `${URL}/${model}`

        if (method === 'POST') {
            config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
            }
        }

        if (method === 'DELETE') {
            url = `${url}/${data}`
        }

        return fetch(`${url}`, config)
    }

    // async addNewActivity(data) { 
    //     const raw = await this.handleData(data, method = 'POST')
    //     const activity = await raw.json()

    // }
   

    render(){
        return (
            <PetDetailsView petDetails={this.props.location.state} activities={this.state.activities} handleData={this.handleData}></PetDetailsView>
        )
    }
}

export default PetDetails