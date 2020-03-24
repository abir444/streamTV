import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Layout, Menu, Icon } from 'antd';
import Video from './Component/Video';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
function App() {

  // const changeVideo = () =>{
  //   changeSelecttedVideo();
  // }




  return (
    <Layout>


    <Layout>
      {/* // content */}
      <Video/>
    </Layout>

  </Layout>

  );
}

export default App;
