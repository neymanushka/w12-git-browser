/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Route, useHistory, useParams } from 'react-router-dom'
import Head from './head'
import ReposList from './repos-list'
import RepoView from './repo-view'
import MainView from './main'
import Header from './header'

const axios = require('axios')

const Home = () => {
  const history = useHistory()
  const [userId, setUserId] = useState()
  const [currentRepo, setCurrentRepo] = useState()
  const [list, setList] = useState([])
  const [content, setContent] = useState()

  const onRepoSelect = async (repoName) => {
    const file = await axios(`https://api.github.com/repos/${userId}/${repoName}/readme`)
    const readme = await axios(file.data.download_url)
    setCurrentRepo(repoName)
    setContent(readme.data)
    history.push(`/${userId}/${repoName}`)
  }

  const onSearchClick = async (id) => {
    try {
      const repos = await axios(`https://api.github.com/users/${id}/repos`)
      const list = repos.data.map((repo) => repo.name).sort((a, b) => a.localeCompare(b))
      setUserId(id)
      setList(list)
      history.push(`${id}`)
    } catch (err) {
      setList([])
    }
  }

  return (
    <div>
      <Header user={userId} repo={currentRepo} history={history} />
      <Route exact path="/" component={() => <MainView onSearchClick={onSearchClick} />} />
      <Route
        exact
        path="/:userId"
        component={() => <ReposList list={list} onRepoSelect={onRepoSelect} />}
      />
      <Route
        exact
        path="/:userId/:repositoryName"
        component={() => <RepoView content={content} current={currentRepo} />}
      />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
