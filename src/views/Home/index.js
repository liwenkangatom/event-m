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
                        <TreeBar></TreeBar>
                    </div>
                    <div className='chart'>
                        <EventDrop></EventDrop>
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
    return {
        addTag: bindActionCreators(actions.home.treebar.addTag),
        deleteTag: bindActionCreators(action.home.treebar.deleteTag)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)