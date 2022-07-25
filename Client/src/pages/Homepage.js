import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'


export default function Homepage() {
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useFetch('http://localhost:1338/api/stories?populate=Media', cookies.token)

  if (loading) return <p>Loading...</p>;

  // console.log(data.data[0].attributes.media.data[0].attributes.formats.thumbnail.url)
  console.log(data)
  return (
    <div>
      {data.data.map( (story, index) => (
        <div key={story.id} className="story-card">

          <div className="rating">{story.id}</div>
          <h2>{story.attributes.Title}</h2>
          <small>published: {story.attributes.Date}</small>
          <p>{story.attributes.Description.substring(0, 200)}...</p>

          <div className='img-wrapper'>
            
            {story.attributes.Media.data.map( img => {
              console.log(img)
              return(
                <div key={img.id} className='img-container'>
                  {img.attributes.ext == '.mp4'
                  ?
                    <video key={img.id}
                    className='img'
                    controls 
                    src={`http://localhost:1338${img.attributes.url}`}
                    />
                  :
                  img.attributes.ext == '.webm'
                  ?
                  <video key={img.id}
                  className='img'
                  controls 
                  src={`http://localhost:1338${img.attributes.url}`}
                />
                  :
                    <img key={img.id}
                    className='img'
                    src={`http://localhost:1338${img.attributes.url}`}
                    />
                  }
                </div>
              )
            })}
          </div>

          <Link to={`/story/${story.id}`}>Read more</Link>
          {/* <img src={`http://localhost:1337${data.data[index].attributes.media.data[0].attributes.url}`}/> */}
        </div>
      ))}
    </div>

  )

}