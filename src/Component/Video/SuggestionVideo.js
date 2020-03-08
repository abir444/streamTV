import React from 'react';
import { Layout, Menu, Icon,List } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


// const data = [
//   {
//     title: 'Title 1',
//   },
//   {
//     title: 'Title 2',
//   },
//   {
//     title: 'Title 3',
//   },
//   {
//     title: 'Title 4',
//   },
//   {
//     title: 'Title 5',
//   },
//   {
//     title: 'Title 6',
//   },
// ];

export default  ({videoList,changeSelecttedVideo}) => {

  const changeVideo = (data) =>{
    changeSelecttedVideo(data);
  }
    return(
      <React.Fragment>
        {videoList.length > 0 &&
          videoList.map(data=>(
            <List.Item>
            <div
              style={{
                marginBotom : 10,
                padding : 10,
                display: "flex"
              }}>
              <div onClick={()=>{changeVideo(data)}}>
                <img src={data.thumbnails.medium.url} height="80px" />
              </div>
              <div style={{paddingLeft : 5}}>
              </div>
            </div>
          </List.Item>
        ))}
      </React.Fragment>
        /*
        <div>
          {videoList.length > 0 &&(
            videoList.map(data=>(<p onClick={()=>{changeVideo(data)}}>{data.title}</p>))
          )}
        </div>
        */
    );
};