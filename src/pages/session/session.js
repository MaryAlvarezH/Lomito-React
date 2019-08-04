import React, {Component,Fragment} from 'react'
import SessionView from './sessionView';

class Session extends Component {
    render() {
        return(
            <Fragment>
                <h1>I am Session</h1>
                <SessionView></SessionView>

            </Fragment>
        )
    }
}

export default Session 