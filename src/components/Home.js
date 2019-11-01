import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home(props) {
    const [albums, setAlbums] = useState([]) 

    useEffect(() => {
        axios.get("/albums").then(resp => {
            setAlbums(resp.data)
        })
    }, [])

  return (
      <div className='homepage'>
          <h1>My Album</h1>
          <div className='albums'>
              {albums.map(album => (
                  <Link className='homelink' key={'album-link-' + album.id} to={'/albums/' + album.id}>
                    <div className='album'>
                        <img src={album.coverUrl} alt=''></img>
                        <p>{album.name}</p>
                    </div>
                  </Link>
              ))}
          </div>
      </div>
  )
}

export default Home