import React, { Component } from 'react';
import './App.css';
import { Card, Icon,Modal} from 'antd';
import Nav from './Nav'
import {connect} from 'react-redux';

const { Meta } = Card;

function mapDispatchToProps(dispatch) {

  return {

      deleteArticle: function(position) { 

      console.log('deleting the position -->',position)

      dispatch( {type: 'DELETE',
                    position:position
                                      }) 
     }
  }
}

function mapStateToProps(state) {

  console.log('notre store -->', state)
  return { articlesLiked: state }
 }

class MyArticles extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      ThemeArticles: [],
      visible:false,
      title: 'No title',
      content: 'No content'
    }
  }

  showModal = (title,content) => {

    this.setState({
      visible: true,
      title: title,
      content: content
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };



  render() {

    if(this.props.articlesLiked.length === 0){

      console.log('No articles')
      
      return (

      <div>
                    
        <Nav/>

        <div className="Banner"/>

        <h1 style={{marginTop: '30px',
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    color: 'burlywood'}}
                    >No Articles</h1>
        </div>

      )

    }else{

    return (
      
      <div>
         
            <Nav/>

            <div className="Banner"/>

            
            <div className="Card">
    
                {this.props.articlesLiked.map((article,i) => (

                    <div key={i} style={{display:'flex',justifyContent:'center'}}>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="example"
                            src={article.urlToImage}
                        />
                        
                        }
                        
                        actions={[
                          <Icon type="read" key="ellipsis2" onClick={() => this.showModal(article.title,article.content)}/>,
                            <Icon type="delete" key="ellipsis" onClick={() => {this.props.deleteArticle(i)}}/>
                        ]}
                        >
                          
                        <Meta
                          title={article.title}
                          description={article.description}
                        />


                  
                      </Card>

                      <Modal
                        title={this.state.title}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        
                        >

                        <p>{this.state.content}</p>

                </Modal>

                    </div>



                ))}

                

             </div>
      
            

      </div>
           );
         }
  }
}


 
 export default connect(
   mapStateToProps, 
   mapDispatchToProps
 )(MyArticles);
