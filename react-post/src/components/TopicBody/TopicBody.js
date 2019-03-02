import React, { Component } from 'react'

class TopicBody extends Component {
  render() {
    const { topic, num } = this.props
    const body = topic ? (
      <div>
        <h2>{topic.title}</h2>
        <p>{topic.content}</p>
        <span>评论数: {num}</span>
      </div>
    ) : (
      <span>加载中</span>
    )
    return body
  }
}

export default TopicBody
