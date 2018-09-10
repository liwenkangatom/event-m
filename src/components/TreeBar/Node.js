import React, { Component } from 'react'
<<<<<<< HEAD
import {TreeSelect, Input} from 'antd'
=======
import {TreeSelect, Tree} from 'antd'
import ContextMenu from './ContextMenu'
>>>>>>> 78daaf8a96a8220f048c5eed926f0a5992f56779
const TreeNode = TreeSelect.TreeNode
export default class Node extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible:false
    }
  }
<<<<<<< HEAD
  _handleClick = (event) => {
    const { visible } = this.state;
    const wasOutside = !(event.target.contains === this.root);
    if (wasOutside && visible) this.setState({ visible: false, });
  };

  _handleScroll = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: false, });
  };

  _handleDoubleClick=()=>{
    
  }
  
 _handleContextMenu = (event) => {
        event.preventDefault();

        this.setState({ visible: true });

        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.root.offsetWidth;
        const rootH = this.root.offsetHeight;

        // right为true，说明鼠标点击的位置到浏览器的右边界的宽度可以放contextmenu。
        // 否则，菜单放到左边。
        // top和bottom，同理。
        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
        const bottom = !top;

        if (right) {
            this.root.style.left = `${clickX + 5}px`;
        }

        if (left) {
            this.root.style.left = `${clickX - rootW - 5}px`;
        }

        if (top) {
            this.root.style.top = `${clickY + 5}px`;
        }

        if (bottom) {
            this.root.style.top = `${clickY - rootH - 5}px`;
        }
    }
  componentDidMount() {
    document.addEventListener('contextmenu', this._handleContextMenu);
    document.addEventListener('click', this._handleClick);
    document.addEventListener('scroll', this._handleScroll);
  };

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this._handleContextMenu);
    document.removeEventListener('click', this._handleClick);
    document.removeEventListener('scroll', this._handleScroll);
  }
  render() {
    const { visible } = this.state
    const { title } = this.props
    return (
      <div>
        <TreeNode title={title}>
          <TreeNode style={visible?visibleStyle:unvisibleStyle} title={<input></input>}></TreeNode>
        </TreeNode>
      </div>
=======
 
  render() {
    const { addState, changeState, deleteState, title } = this.props
    let show ={
      'display': 'block'
    }
    let unshow = {
      
      'display': 'none'
    }
    return (
      <TreeNode>
        <TreeNode
          style={deleteState?show:unshow}
          title= {changeState?<input placeholder={title}>
          </input>:<ContextMenu>{title}</ContextMenu>}
        >
          <TreeNode
            style={addState?show:unshow}
            title={<input></input>}
          >
          </TreeNode>
        </TreeNode>
      </TreeNode>
>>>>>>> 78daaf8a96a8220f048c5eed926f0a5992f56779
    )
  }
}
