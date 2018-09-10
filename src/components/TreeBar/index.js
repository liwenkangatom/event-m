import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Layout, Icon, Tree, Input, Menu} from 'antd';
import 'antd/dist/antd.css';

import { Search, 
  SearchWrapper,
  Tags,
  Text,
  Add,

  MenuItem
} from './style'
import './treebar.css'
import { relative } from 'path';

const {Sider, Content, Header} = Layout
const SearchInput = Input.Search
const TreeNode = Tree.TreeNode;
export class TreeBar extends Component {
  static propTypes = {
    treeData: PropTypes.array,
    addTag: PropTypes.func,
    deleteTag: PropTypes.func,
    renameTag: PropTypes.func,
    selectedTag: PropTypes.func,
  }
  static defaultProps = {
    treeData: [],
    addTag: ()=>0,
    deleteTag: ()=>0,
    renameTag: () =>0,
    selectedTag: () => 0
  }
  constructor(props) {
    super(props);
    this.state={
      onExpandedKeys: [],
      selectedKey: 0,
      collapsed: true,
      siderwidth: 200
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount = () => {
    document.addEventListener('contextmenu', this._handleContextMenu)
  }
  _handleContextMenu = (event) => {
    console.log(event)
  }
  render() {
    const { treeData } = this.props
    const { collapsed, siderwidth } = this.state
    return (
       <Layout style={{ minHeight: '100vh' }}>   
        <Sider
          collapsible
          collapsed={collapsed}
          collapsedWidth='0'
          trigger={null}
          width={siderwidth}
        >
        <div className="siderwraper" >

          <SearchWrapper>
            <Search/>
            <Icon 
              type="search" 
              style={{ fontSize: 14,
                       color: '#d2d2d2',
                       position: 'relative',
                       right: '170px'
                    }}
              />
          </SearchWrapper>  
          <Tags>
              <Text>Tags</Text>
              <div onClick={this.addRootTag}>
              	<Add >
                	<Icon type="plus"/>
              	</Add>
              </div>
          </Tags>
          {/* <SearchInput></SearchInput> */}
          <Tree>
                    
          </Tree>
        </div>
        <div className="slider" onDragCapture={(e)=>{
         e.persist
          this.setState({siderwidth: e.clientX})
        }} onDragEnd={
          (e)=>{
            e.persist
          console.log(e.clientX)
          if(e.clientX<= 200){
            this.setState({siderwidth: 200})
          }else if(e.clientX>= 500){
            this.setState({siderwidth: 500})
          }else this.setState({siderwidth: e.clientX})
          }
        }></div> 
          
        
        </Sider>
        <Layout onDragOver={()=>0}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default TreeBar
