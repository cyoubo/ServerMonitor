import { connect } from 'dva'
import React, { Component } from 'react'
import ServerBanner from '../../components/ServerBanner/ServerBanner'

class AppPage extends Component {
    
    constructor(props){
        super()
        this.state = {
            currentTaskID : undefined
        }
    }

    componentDidMount(){
        let currentTaskID = setInterval(()=>{
            
        },5000)
        this.setState({currentTaskID: currentTaskID})
    }

    componentWillUnmount(){
        if (this.state.currentTaskID!== undefined){
            clearInterval(this.state.currentTaskID)
        }
    }

    render() {
        return (
            <div>
                <ServerBanner></ServerBanner>
            </div>
        )
    }
}

export default connect()(AppPage)

