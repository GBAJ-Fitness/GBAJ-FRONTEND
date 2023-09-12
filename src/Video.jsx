import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Video extends Component {
  render() {
    return (
      <div style={{width:"100%", display:"flex", justifyContent:"center", marginBottom:"10rem", paddingTop:"5rem"}}>
        <ReactPlayer url={/GBAJ.MP4'} controls={true} />
        </div>
    )
  }
}
