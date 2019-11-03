import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'

function Album(props) {
    const [gallery, setGallery] = useState([]) 
    const [albums, setAlbums] = useState([])
    const [albumName, setAlbumName] = useState('')
    const id = props.match.params.id

    useEffect(() => {
        axios.get(`/albums/${id}?_embed=pictures`).then(resp => {
            setGallery(resp.data.pictures)
            setAlbumName(resp.data.name)
        })
    }, [id])

    useEffect(() => {
        axios.get("/albums").then(resp => {
            setAlbums(resp.data)
        })
    }, [])

  return (
      <div className=''>
          <div className='top'>
          <h1>{albumName}</h1> 
          <Link className='home' to=''><div className='home'><Icon icon='home'/></div></Link>
          </div>
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
          {albums.map(album => (
                  <Link key={'album-link-' + album.id} to={'/albums/' + album.id}>
                    <div>
                        <p>{album.name}</p>
                    </div>
                  </Link>
              ))}

          </div>
          

      </div>
  )
}

export default Album
