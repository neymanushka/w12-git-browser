import React from 'react'
import ReactMarkdown from 'react-markdown'
import '../../node_modules/github-markdown-css/github-markdown.css'

const RepoView = (props) => {
  return (
    <div>
      <ReactMarkdown className="markdown-body" id="description" source={props.content} />
    </div>
  )
}

RepoView.propTypes = {}

export default RepoView
