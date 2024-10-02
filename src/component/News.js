import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  
  constructor(){
    super() ; 
    this.state = {
      articles: [], 
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=apple&from=2024-09-30&to=2024-09-30&sortBy=popularity&apiKey=7a364e2f5f564ea79675fa2c8607aee6&page=1" ;
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({articles : persedData.articles});

  }
  handlePrevBtn = async()=>{
  console.log();

  let url = `https://newsapi.org/v2/everything?q=apple&from=2024-09-30&to=2024-09-30&sortBy=popularity&apiKey=7a364e2f5f564ea79675fa2c8607aee6&page=${this.state.page-1}`;
  let data = await fetch(url);
  let persedData = await data.json();
  console.log(persedData);
  this.setState(
    {page : this.state.page-1},
    {articles : persedData.articles}
  )

  }

  handleNextBtn = async ()=>{
    console.log("next")
    
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-09-30&to=2024-09-30&sortBy=popularity&apiKey=7a364e2f5f564ea79675fa2c8607aee6&page=${this.state.page+1}`;
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState(
      {page : this.state.page+1},
      {articles : persedData.articles}
    )
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2 >Top headlines of NewsApp </h2>
        <div className='row'>
          {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage}  url = {element.url}  />
            </div>
          })}
            <div className='cointainer d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevBtn}>&larr; Privious</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>

            </div>  
        </div>
      </div>
    )
  }
}

export default News
