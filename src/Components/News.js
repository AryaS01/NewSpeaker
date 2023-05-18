import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  
  constructor(){
    super();
    console.log("Im the constructor of news component")
    this.state={
      articles:[],
      loading:false
    }
  }
async componentDidMount(){
 let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=849f21d206d740cba44653968bc25396";
 let data = await fetch(url);
let parsedData = await data.json();
 console.log(parsedData);
 this.setState({articles: parsedData.articles})
};
  render() {
    return (
      <div className="container my-3">
<h2>NewSpeaker- Top headlines</h2>
<div className="row">
  {this.state.articles.map((element)=>{
    return <div className="col-md-3" key={element.url}>
<Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
</div>
  })}
      </div>
      </div>
    )
  }
}

export default News
