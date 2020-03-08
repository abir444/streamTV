import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



export default({detail}) => {
   
    return(
        <div>
        {detail && (
         <div>
             <div>
                <iframe width="560" height="315" 
            src={`https://www.youtube.com/embed/${detail.id}`}
             ></iframe>
             </div>
            <div>
                <div>{detail.title}</div>
                <div>{detail.description}</div>
            </div>
         </div>
        )}    

        </div>
    )
}