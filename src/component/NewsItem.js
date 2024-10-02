import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url} = this.props ;
    return (
      <div>
        <div className="card" style = {{width : "18rem"}} >
          <img src={imageUrl?imageUrl:"https://i.insider.com/66ec29d1d17aa3c7b2b413a8?width=1200&format=jpeg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
