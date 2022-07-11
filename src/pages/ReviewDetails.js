import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import axios from 'axios'
import fileDownload from 'js-file-download'

import Download from '../static/download.png'

export default function Category() {
  const {id} = useParams() ;
  const {loading, error, data} = useFetch(`http://localhost:1337/api/reviews/${id}?populate=media`);

  if (loading) return <p>Loading...</p>

  const handleclick = (url, media) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((response) => {
      fileDownload(response.data, media)
    })
  }

  // const checkVid = (ext) => {

  //   if(ext.mime == ('video/mp4' || 'video/webm'))
  //     {  
  //     return true}
  //   else 
  //   {console.log(ext.mime)
  //   return }
  // }

  // console.log(data.data.attributes.media)
  return (
    <div  className="story-card">
          <div className="rating">{data.data.id}</div>
          <h2>{data.data.attributes.title}</h2>
          <small>published: {data.data.attributes.date}</small>
          <p>{data.data.attributes.body}</p>

          <div className='img-wrapper'>
            {data.data.attributes.media.data.map( (img, index) => {
              // console.log(img.attributes.mime)
              return(
                <div className='img-container' key={img.id}>
                  {img.attributes.ext == '.mp4'
                  ?
                    <video 
                    className='img'
                    controls 
                    src={`http://localhost:1337${img.attributes.url}`}
                    />
                  :
                  img.attributes.ext == '.webm'
                  ?
                    <video 
                    className='img'
                    controls 
                    src={`http://localhost:1337${img.attributes.url}`}
                    />
                  :
                    <img 
                    className='img'
                    src={`http://localhost:1337${img.attributes.formats.thumbnail.url}`}
                    />
                  }
                  
                  <img 
                    src={Download} 
                    className='download-icon'
                    onClick={() => 
                      {img.attributes.ext == '.webm'
                      ?
                        (handleclick(`http://localhost:1337${data.data.attributes.media.data[index].attributes.url}`,
                        `video.webm`))
                        :
                        img.attributes.ext == '.mp4' 
                      ?
                        (handleclick(`http://localhost:1337${data.data.attributes.media.data[index].attributes.url}`,
                        `video.mp4`))
                      :
                        (handleclick(`http://localhost:1337${data.data.attributes.media.data[index].attributes.formats.thumbnail.url}`,
                        `${data.data.attributes.media.data[index].attributes.alternativeText}`))
                      }
                    }/>
                </div>
              )
            })}
          </div>
          
          {/* <a href={url} download={'media.jpg'} target={'blank'}> */}
          <div className='button-container'>
            <button 
              className='download'
              onClick={() => 
                {handleclick
                  (`http://localhost:1337${data.data.attributes.media.data[0].attributes.formats.thumbnail.url}`,
                   "media.jpg")}}
              >Dowload Media
            </button>
          </div>
          {/* </a> */}
      </div>
  ) 
}