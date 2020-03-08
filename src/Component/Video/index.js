import React, { useEffect, useState}  from 'react';
import YouTube from 'simple-youtube-api';
import { Layout, Menu, Icon } from 'antd';
import '../../App.css';
import SingleVideo from './SingleVideo';
import SuggestionVideo from './SuggestionVideo';
import config from "../../config"
const { Header, Content, Footer, Sider } = Layout;



const youtube = new YouTube(config.apiKey);

export default  ({preference}) => {
  const [videoList, setVideoList ] = useState([]);
  const [selectedVideo, setSelectedVideo ] = useState({});

  useEffect(()=>{
    callApi();
  },[preference]);
  const callApi = async() => {
    console.log(preference);
    const result =  await youtube.searchVideos(preference,4);
    console.log(result);
    setSelectedVideo(result[0]);
    setVideoList(result);
  };

  const selectedVideoCallBack =  (videoDetail) => {
    setSelectedVideo(videoDetail);
  }


    return(
        <React.Fragment>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
     
      <SuggestionVideo videoList = {videoList} changeSelecttedVideo={selectedVideoCallBack}/>
    </Sider>
      
      <Content style={{ margin: '24px 16px 0' }}>
      
        <div style={{ padding: 24, background: '#00FFFF', minHeight: 360 }}><SingleVideo detail = {selectedVideo} /> </div>
          
      </Content>

    </React.Fragment>
    )
}