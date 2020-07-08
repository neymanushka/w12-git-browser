import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import ReposList from './repos-list'
import RepoView from './repo-view'
import MainView from './main'
import Header from './header'

const Home = () => {
  const history = useHistory()

  const onRepoSelect = async (user, repoName) => {
    history.push(`/${user}/${repoName}`)
  }

  const onSearchClick = async (id) => {
    history.push(`${id}`)
  }

  return (
    <div>
      <Route exact path="/:userId?/:repositoryName?" component={() => <Header />} />
      <Route exact path="/" component={() => <MainView onSearchClick={onSearchClick} />} />
      <Route exact path="/:userId" component={() => <ReposList onRepoSelect={onRepoSelect} />} />
      <Route exact path="/:userId/:repositoryName" component={() => <RepoView />} />
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
