const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not rated</p>
            <h2>Description</h2>
            <p>No description yet</p>
            <h2>Comments</h2>
            <p>No comments yet!</p>
          </main>
        </Def>
    )
}

module.exports = show
