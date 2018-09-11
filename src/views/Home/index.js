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
        const { tData, addtag, inittags, renametag, deletetag, onselecttag } = this.props
        return (
            <div className='Home'>
                <div className='header'>
                    <Header></Header>
                </div>
                <div className='section'>
                    <div className='sider'>
                        <TreeBar 
                        treeData={tData}
                        addTag={addtag}
                        deleteTag={deletetag}
                        renameTag={renametag}
                        >
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
    return {
        inittags: bindActionCreators(actions.home.treebar.refreshtags),
        renametag: bindActionCreators(actions.home.treebar.renametag),
        deletetag: bindActionCreators(actions.home.treebar.deletetag),
        addtag: bindActionCreators(actions.home.treebar.addtag),
        onselecttag: bindActionCreators(actions.home.treebar.onSelect)
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)