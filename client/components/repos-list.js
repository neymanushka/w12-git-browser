import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const axios = require('axios')

const ReposList = (props) => {
  const { userId } = useParams()
  const [list, setList] = useState([])

  useEffect(() => {
    const onSearchClick = async (id) => {
      try {
        const repos = await axios(`https://api.github.com/users/${id}/repos`)
        const sorted = repos.data.map((repo) => repo.name).sort((a, b) => a.localeCompare(b))
        setList(sorted)
      } catch (err) {
        setList([])
      }
    }
    onSearchClick(userId)
  }, [userId])

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        {list.map((repo) => {
          return (
            <div key={repo}>
              <button type="button" onClick={() => props.onRepoSelect(userId, repo)}>
                {repo}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ReposList.propTypes = {}

export default ReposList
