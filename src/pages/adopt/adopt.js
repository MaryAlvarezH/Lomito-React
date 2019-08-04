import React, {Component,Fragment} from 'react'
import AdoptView from './adoptView';
let petList = [1,2,3,4,5,6,7,8,9]
class Adopt extends Component {
    render() {
        return (
            <Fragment>
                <AdoptView petList={petList}></AdoptView>
            </Fragment>
        )
    }
}

export default Adopt