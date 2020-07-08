import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userId, repositoryName } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div id="repository-name">{repositoryName}</div>
      {userId && (
        <Link id="go-back" to="/">
          Back
        </Link>
      )}
      {repositoryName && (
        <Link id="go-repository-list" to={`/${userId}`}>
          Repos List
        </Link>
      )}
    </nav>
  )
}

export default React.memo(Header)
