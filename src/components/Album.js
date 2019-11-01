import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

function Album(props) {
    const [gallery, setGallery] = useState([]) 
    const [album, setAlbum] = useState({})
    

    useEffect(() => {
        const id = props.match.params.id
        axios.get(`/albums/${id}?_embed=pictures`).then(resp => {
            setGallery(resp.data.pictures)
            setAlbum(resp.data)
        })
    }, [])

  return (
      <div className=''>
          <h1>Album Name</h1>
          <div className='onealbum'>
          {gallery.map(gal => (
                <Link className='albumlink' key={'gallery-link-' + gal.id} to={'/pic/' + gal.id}>
                    <div className='albumfocus'>
                        <img src={gal.url} alt=''/>
                        <p>{gal.name}</p>
                    </div>
                </Link>  
              ))}
          </div>
          <div className='albumnav'>

          </div>

      </div>
  )
}

export default Album

/*  */