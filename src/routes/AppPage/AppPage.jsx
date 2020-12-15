import { connect } from 'dva'
import React, { Component } from 'react'
import ServiceBanner from '../../components/ServiceBanner/ServiceBanner'
import * as action from "../../actions/ServerAction"
import ServiceList from '../../components/ServiceList/ServiceList'
import ServiceChart from '../../components/ServiceChart/ServiceChart'

class AppPage extends Component {
    
    constructor(props){
        super()
        this.state = {
            currentTaskID : undefined
        }
    }

    componentDidMount(){
        let currentTaskID = setInterval(()=>{
            this.props.dispatch(action.queryAllServiceRecord(100))
        }, 5000)
        this.setState({currentTaskID: currentTaskID})
    }

    UNSAFE_componentWillUpdate(){
        if (this.state.currentTaskID!== undefined){
            clearInterval(this.state.currentTaskID)
        }
    }

    render() {
        return (
            <div>
                <ServiceBanner></ServiceBanner>
                <ServiceList></ServiceList>
                <ServiceChart></ServiceChart>
            </div>
        )
    }
}

export default connect()(AppPage)

