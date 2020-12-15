import { connect } from 'dva'
import React, { Component } from 'react'
import ServiceBanner from '../../components/ServiceBanner/ServiceBanner'
import * as action from "../../actions/ServerAction"
import ServiceList from '../../components/ServiceList/ServiceList'
import ServiceChart from '../../components/ServiceChart/ServiceChart'
import ServiceSystemCards from '../../components/ServiceSystemCards/ServiceSystemCards'
import * as style from "./AppPage.css"

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
            <div className = {style.apppage_out}>
                <ServiceBanner></ServiceBanner>
                <div className = {style.apppage_context_out}>
                    <div className = {style.apppage_servicelist}>
                        <ServiceList></ServiceList>
                    </div >
                    <div className = {style.apppage_subcontext_out}>
                        <div className = {style.apppage_cards}>
                            <ServiceSystemCards></ServiceSystemCards>
                        </div>
                        <div className = {style.apppage_charts}>
                            <ServiceChart></ServiceChart>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default connect()(AppPage)

