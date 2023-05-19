import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export class News extends Component {
  
  constructor(){
    super();
    console.log("Im the constructor of news component")
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
async componentDidMount(){
 let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=849f21d206d740cba44653968bc25396&page=1&pageSize=${this.props.pageSize}`;
 this.setState({loading:true});
 let data = await fetch(url);
let parsedData = await data.json();
 console.log(parsedData);
 this.setState({articles: parsedData.articles, 
  totalResults: parsedData.totalResults,
  loading:false})
}
handlePrevClick=async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=849f21d206d740cba44653968bc25396&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
 let parsedData = await data.json();
  console.log(parsedData);
 
 
  this.setState({
   page: this.state.page -1,
   articles: parsedData.articles,
   loading:false
 })
}

handleNextClick=async()=>{
  if(!(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=849f21d206d740cba44653968bc25396&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
 this.setState({loading:true});
  let data = await fetch(url);
let parsedData = await data.json();
 console.log(parsedData);


 this.setState({
  page: this.state.page +1,
  articles: parsedData.articles,
  loading:false
})
}
}

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewSpeaker- Top headlines</h1>
      {this.state.loading && <Spinner/>}
<div className="row">
  {!this.state.loading && this.state.articles.map((element)=>{
    return <div className="col-md-3" key={element.url}>
<Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
</div>
  })}
  <div className="conatiner d-flex justify-content-between">
  <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
  <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr; </button>
  </div>
      </div>
      </div>
    )
  }
}

export default News
