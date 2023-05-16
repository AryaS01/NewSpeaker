import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div>
This is the news component
<Newsitem/>
<Newsitem/>
<Newsitem/>
<Newsitem/>
<Newsitem/>
<Newsitem/>

      </div>
    )
  }
}

export default News
