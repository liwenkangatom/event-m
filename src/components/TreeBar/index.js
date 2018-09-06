import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './treebar.css'

export class TreeBar extends Component {
  static propTypes = {
    treeData: PropTypes.array,
    addTag: PropTypes.func,
    deleteTag: PropTypes.func,
    renameTag: PropTypes.func,
    selectedTag: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state={
      onExpandedKeys: [],
      selectedKey: 0,
    }
  }
  
  render() {
    return (
      <div className='testcss'>
        <button onClick={this.props.deleteTag}></button>
        <p>{treeData}</p>
      </div>
    )
  }
}
export default TreeBar
