import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Layout, Icon, Tree, Input,  Tooltip, Modal} from 'antd';
import 'antd/dist/antd.css';

import { Search, 
  SearchWrapper,
  Tags,
  Text,
  Add,
  Mtem,
  Menu
} from './style'
import './treebar.css'
import { relative } from 'path'
// import ContextMenu from './ContextMenu';
// import Node from './Node'
import { ContextMenu, MenuItem , ContextMenuTrigger} from 'react-contextmenu'

const {Sider, Content, Header} = Layout
const confirm = Modal.confirm;
// const SearchInput = Input.Search
const TreeNode = Tree.TreeNode;
class TreeBar extends Component {
  static propTypes = {
    treeData: PropTypes.array,
    addTag: PropTypes.func,
    deleteTag: PropTypes.func,
    renameTag: PropTypes.func,
    selectedTag: PropTypes.func,
  }
  static defaultProps = {
    treeData: [
      {
        "key": 1,
        "title": "test1",
        "children": [{
          "key": 2,
          "title": "test2",
          "children":[ {
            "key": 3,
            "title": "test3",
          }, {
            "key": 4,
            "title": "test4"
          }]
        },{
          "key": 5,
          "title": "test5",
        }]
      },
      {
        "key": 6,
        "title": "test6"
      },
      {
        "key": 7,
        "title": "test7"
      }
    ],
    addTag: ()=>0,
    deleteTag: ()=>0,
    renameTag: () =>0,
    selectedTag: () => 0
  }
  constructor(props) {
    super(props);
    this.state={
      data: this.props.treeData,
      onExpandedKeys: [],
      selectedKey: 0,
      collapsed: true,
      siderwidth: 200,
      searchValue: 'test6',
      expandedKeys: [],
      addkey: '1',
      changekey: '',
      temptagkey: '',
      rightclickkey: '',
      addroot: false
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  componentDidMount = () => {
    // document.addEventListener('contextmenu', this._handleContextMenu)
  }
  _handleContextMenu = (event) => {
    console.log(event)
  }
  addhandle = () => {
    this.setState({
      addkey: this.state.rightclickkey,
      changekey: '',
      addroot: false
    })
  }
  changehandle = () => {
    this.setState({
      changekey: this.state.rightclickkey,
      addkey: '',
      addroot: false
    })
  }
  deletehandle = () => {

    this.showDeleteConfirm
  }
  addRootTag = () => {
    this.setState({
      addroot: true,
      addkey: '',
      changekey: ''
    })
  }
  // searchValue searchonchange = (e) => {
  //   const value = e.target.value;
  //   const expandedKeys = dataList.map((item) => {
  //     if (item.title.indexOf(value) > -1) {
  //       return getParentKey(item.key, this.props.dropsValue);
  //     }
  //     return null;
  //   }).filter((item, i, self) => item && self.indexOf(item) === i);
  //   this.setState({
  //     expandedKeys,
  //     searchValue: value,
  //     autoExpandParent: true,
  //   });
    
  // }
  render() {
    const { collapsed, siderwidth , data, addkey, changekey, tmptagkey} = this.state
    const { searchValue, expandedKeys, autoExpandParent, addroot } = this.state; 
    console.log(data)
    console.log(this.state)
    let titlecreator = (item) => <ContextMenuTrigger  id="some_unique_identifier" collect={()=>{this.setState({rightclickkey:item.key})}} >
                  <div className="well" onDoubleClick={()=>{this.setState({
          rightclickkey: item.key
        },()=>{
          this.changehandle()
        }
        )}} >{item.title}</div>
                </ContextMenuTrigger>


    const loop = data => data.map((item) => {
    const index = item.title.indexOf(searchValue);
    const beforeStr = item.title.substr(0, index);
    const afterStr = item.title.substr(index + searchValue.length);
    const title = index > -1 ? (
      <span>
        <ContextMenuTrigger    id="some_unique_identifier" collect={()=>{this.setState({rightclickkey:item.key})}}>
        <div  onDoubleClick={()=>{this.setState({
          rightclickkey: item.key,

        },()=>{
          this.changehandle()
        }
        )}}>
            {beforeStr}
            <span style={{ color: '#f50' }}>{searchValue}</span>
            {afterStr}
         </div>
        </ContextMenuTrigger>
      </span>) : <span>{titlecreator(item)}</span>;

    // let tmpnode = 
    // if(item.key == addkey){
    //   tmpnode = <TreeNode key={item.key} title={title}>
    //       <TreeNode key={tmptagkey} title={
    //         <input></input>
    //       }></TreeNode>
    //       {loop(item.children)}
    //     </TreeNode>
    // }
    // if(item.key == changekey){
    //   tmpnode = <TreeNode key={item.key} title={
    //     <input placeholder={item.title}></input>
    //   }>
    //       {loop(item.children)}
    //     </TreeNode>
    // }
   
    if (item.children) {
      return (
        <TreeNode key={item.key} title=
        {
          (item.key == changekey)?
          <Input size='small' style={{width:'50px'}} placeholder={item.title}></Input>:
          title
        }
        >
          
          {(item.key == addkey)?<TreeNode title={
            <Input size='small' style={{width:'50px'}}></Input>
          }></TreeNode>:''}
          {loop(item.children)}
        </TreeNode>

      );
    }
    // if (item.children && item.key === changekey) {
    //   return (
    //     <TreeNode  key={item.key} title={
    //       <Input size='small' style={{width:'50px'}} placeholder={item.title}></Input>
    //     }>
    //         {loop(item.children)}
    //       </TreeNode>

    //   );
    // }
    return (
       <TreeNode key={item.key} title=
        {
          (item.key == changekey)?
          <Input size='small' style={{width:'50px'}} placeholder={item.title}></Input>:
          title
        }
        >
          
          {(item.key==addkey)?<TreeNode key={tmptagkey} title={
            <Input size='small' style={{width:'50px'}}></Input>
          }></TreeNode>:''}
        </TreeNode>
    )
  });
   


    let menuitem = 
      <div style={{
    //     "position": "absolute",
    // "left": "1010px",
        "width": "118px",
	      "height": "88px",
	      "backgroundColor": "#ffffff",
	      "boxShadow": "0px 2px 10px 0px rgba(124, 124, 124, 0.29)",
         "borderRadius": "4px",
      }}>
       
        <div style={{
          width: "118px",
          height: "27px",
          "lineHeight": "27px",
          "paddingLeft": "21px",
          "fontFamily": "ArialMT",
          "fontSize": "14px",
          color: "#7c7c7c",
          "&:hover": {
          "backgroundColor": "rgba(124, 124, 124, 0.1)"
        }}}> 
        <MenuItem onClick={this.addhandle} >
        addTag</MenuItem>
        </div>
        <div style={{
          width: "118px",
          height: "27px",
          "lineHeight": "27px",
          "paddingLeft": "21px",
          "fontFamily": "ArialMT",
          "fontSize": "14px",
          color: "#7c7c7c"}}> 
            <MenuItem onClick={this.showDeleteConfirm}>
          deleteTag</MenuItem>
       </div>
        <div style={{
          width: "118px",
          height: "27px",
          "lineHeight": "27px",
          "paddingLeft": "21px",
          "fontFamily": "ArialMT",
          "fontSize": "14px",
          color: "#7c7c7c",
          "&:hover": {
          "backgroundColor": "rgba(124, 124, 124, 0.1)"
        }}}> 
        <MenuItem onClick={this.changehandle}>
        changeTag</MenuItem>
        </div>
    </div>
  
  let visible = {
    "display": "block"
  }
  let unvisible = {
    "display": "none"
  }
    return (
       <Layout style={{ minHeight: '100vh' }}>   
        <Sider
          onDoubleClick={this.addRootTag}
          collapsible
          collapsed={collapsed}
          collapsedWidth='0'
          trigger={null}
          width={siderwidth}
          style={{backgroundColor: '#fff'}}
        >
        <div className="siderwraper" >

          <SearchWrapper>
            <Search value={searchValue}/>
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
<<<<<<< HEAD
          {/* <SearchInput></SearchInput> */}
          <Tree>
                    
          </Tree>
=======
          <Tree
          checkable
          checkStrictly={true}

          onChange={(value)=>console.log(value)}
          onRightClick={(value) => console.log(value)}
          >
            <TreeNode style={(addroot)?visible:unvisible} title={<Input
            size="small"
            style={{width: "50px"}}
            ></Input>}></TreeNode>
            
           {loop(data)}
          </Tree>
          <ContextMenu id="some_unique_identifier" onShow={(value)=>{console.log(value)}}>
            {menuitem}
          </ContextMenu>
>>>>>>> 78daaf8a96a8220f048c5eed926f0a5992f56779
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
