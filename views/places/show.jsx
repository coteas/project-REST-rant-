const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='images-for-landing'>
          <img src= {data.place.pic}  alt ={data.place.name}/>
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
          </div>
          <div className='data-ins'>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not rated</p>
            <h2>Description</h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <h2>Comments</h2>
            <p>No comments yet!</p>
            {/* Edit and Delete buttons */}
            <div className='buttons'>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>     
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                </div>
                </div>
          </main>
        </Def>
    )
}

module.exports = show
