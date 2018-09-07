import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './eventdrop.css'
export default class EventDrop extends Component {
  static propTypes = {
    show: PropTypes.bool
  }
  static defaultProps = {
    show: true
  }
  constructor (props) {
    super(props)
    this.state = {
      eventtitle: 'defaulttitle'
    }
  }
  render() {
    const { show } = this.props
    const { eventtitle } = this.state
    return (
      <div>
        <div className="EventDrop">
          <p>EventDrop</p>
          <p className={show?'visible':'unvisible'}>{eventtitle}</p>
        </div>
      </div>
    )
  }
}

