// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Tree, Button, Breadcrumb, Input } from 'antd';
import Resizable from 're-resizable';
import Diff from "./Diff";
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

const { DirectoryTree, TreeNode } = Tree;
const { TextArea } = Input;

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};
export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.menu_item}>
            <Icon type="file" className={styles.menu_item_icon} style={{ fontSize: '25px', color: '#464646' }}/>
          </div>
        </div>
        <Resizable
          className={styles.resizable_test}
          minWidth={150}
          maxWidth="70%"
          bounds="parent"
          enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
        >
          <div className={styles.second_editor}>
            <div className={styles.second_editor_content}>
              <div className={styles.second_editor_title}>
                <span>Folder</span>
              </div>
              <div className={styles.second_editor_sections}>
                <div className={styles.second_editor_section_title}>
                  <span>Source</span>
                </div>
                <div>
                <DirectoryTree
                  multiple
                  defaultExpandAll
                  // onSelect={this.onSelect}
                  // onExpand={this.onExpand}
                >
                  <TreeNode style={{'padding': '0px'}} title="parent 0" key="0-0">
                    <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="leaf 0-1af 0-1af 0-1af 0-1" key="0-0-1" isLeaf />
                  </TreeNode>
                  <TreeNode title="parent 1" key="0-1">
                    <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                    <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                  </TreeNode>
                </DirectoryTree>
                </div>
              </div>
            </div>
          </div>
        </Resizable>
        <div className={styles.main_content}>
          <div className={styles.action_container}>
            <Button className={styles.action_button} type="primary" icon="search">Search</Button>
            <Button className={styles.action_button} type="primary" icon="search">Search</Button>
          </div>
          <div className={styles.editor_window_container}>
            <Resizable
              style={style}
              defaultSize={{
                width: "100%",
                height: "300"
              }}
              minHeight="20%"
              enable={{
                bottom: true
              }}
            >
              <div className={styles.editor_window}>
                <div className={styles.editor_window_titlebar}>
                  <span className={styles.editor_window_titlebar_title}>Changes</span>
                  <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                  </Breadcrumb>,
                </div>
                <div className={styles.editor_window_main}>
                  <Diff />
                  {/* <span>
                    top0<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top2<br />
                    top1<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top<br />top21<br />
                  </span> */}
                </div>
              </div>
            </Resizable>
            <div className={styles.translation_window}>
              <div className={styles.editor_window_titlebar}>
                <span className={styles.editor_window_titlebar_title}>Changes</span>
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                  <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                  <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>,
              </div>
              <TextArea rows={4} className={styles.translation_editor} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
