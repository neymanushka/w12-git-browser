import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div id="repository-name">{props.repo}</div>
      {props.user && (
        <Link id="go-back" to="/">
          Back
        </Link>
      )}
      {props.repo && (
        <Link id="go-repository-list" to={`/${props.user}`}>
          Repos List
        </Link>
      )}
    </nav>
  )
}

export default React.memo(Header)
