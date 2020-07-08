import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const axios = require('axios')

const RepoView = () => {
  const { userId, repositoryName } = useParams()
  const [content, setContent] = useState()

  useEffect(() => {
    const onRepoSelect = async (repoName) => {
      const file = await axios(`https://api.github.com/repos/${userId}/${repoName}/readme`)
      const readme = await axios(file.data.download_url)
      setContent(readme.data)
    }
    onRepoSelect(repositoryName)
  }, [repositoryName])

  return (
    <div>
      <ReactMarkdown className="markdown-body" id="description" source={content} />
    </div>
  )
}

RepoView.propTypes = {}

export default RepoView
