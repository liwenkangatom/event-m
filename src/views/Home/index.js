import React, { Component } from 'react'
import {connect} from 'react-redux'
import TreeBar from '../../components/TreeBar'
import EventDrop from '../../components/EventDrop'
import Header from '../../components/Header'

import {actions} from '../../redux'

import './home.css'
import { bindActionCreators } from 'redux';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <div className='header'>
                    <Header></Header>
                </div>
                <div className='section'>
                    <div className='sider'>
                        <TreeBar>
                            <EventDrop></EventDrop>
                        </TreeBar>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        tData: state.home.treebar.treedata,
        selectedkeys: state.home.treebar.selectedkeys
    }
}
const mapDispatchToProps= dispatch => {
    console.log(actions)
    console.log(typeof(actions.home.treebar.lightUp))
    return {
        lightup: bindActionCreators(actions.home.treebar.lghtUp),
        lightdown: bindActionCreators(actions.home.treebar.lightdown)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)