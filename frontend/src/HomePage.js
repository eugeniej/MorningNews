import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { List, Avatar} from 'antd';

import Nav from './Nav'

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      ThemesList: [],
    }
  }

  
  componentDidMount(){

    const APIResultsLoading = async () => {

      // API
      const data = await fetch('https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=3691b27d6150472da84c73503afefe47')

      const body = await data.json()

      this.setState({
        ThemesList:  body.sources
      })

    }

    APIResultsLoading()
  }
  

  render() {


    return (
  
      <div>
        <Nav/>
       
       <div className="Banner"/>

       <div className="HomeThemes">
          <List
              itemLayout="horizontal"

              dataSource={this.state.ThemesList}

              renderItem={(theme,i) => (

              <List.Item>
                <List.Item.Meta

                  avatar={<Avatar src={`/images/${theme.category}.png`} />}

                  title={<Link to={`/ThemeArticles/${theme.id}`} key={i}><h3>{theme.name}</h3></Link>}

                  description={theme.description}
                />

              </List.Item>

              )}/>
          </div>
       
      </div>
    );
  }
}

export default HomePage