import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
<h1>NewSpeaker- Top headlines</h1>
<div className="row">
    <div className="col-md-3">
<Newsitem title="Arya" description="Hey there!"/>
</div>

<div className="col-md-3">
<Newsitem title="Arya" description="Hey there!"/>
</div>

<div className="col-md-3">
<Newsitem title="Arya" description="Hey there!"/>
</div>
      </div>
      </div>
    )
  }
}

export default News
