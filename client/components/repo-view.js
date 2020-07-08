import React from 'react'
import ReactMarkdown from 'react-markdown'

const RepoView = (props) => {
  return (
    <div>
      <ReactMarkdown className="markdown-body" id="description" source={props.content} />
    </div>
  )
}

RepoView.propTypes = {}

export default RepoView
