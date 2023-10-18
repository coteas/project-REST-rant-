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
            {/* Edit and Delete buttons */}
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
   


          </main>
        </Def>
    )
}

module.exports = show
