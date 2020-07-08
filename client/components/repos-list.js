import React from 'react'

const ReposList = (props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        {props.list.map((repo) => {
          return (
            <div key={repo}>
              <button type="button" onClick={() => props.onRepoSelect(repo)}>
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
