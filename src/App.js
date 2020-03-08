import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Layout, Menu, Icon } from 'antd';
import Video from './Component/Video';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <Layout>
      <Header style={{ background: 'red', padding: 0 }} />

    <Layout>
      {/* // content */}
      <Video/>
    </Layout>

  </Layout>

  );
}

export default App;
