import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/reviews?populate=media"
  );

  if (loading) return <p>Loading...</p>;

  // console.log(data.data[0].attributes.media.data[0].attributes.formats.thumbnail.url)
  return (
    <div>
      <header class="header" id="header">
        <nav class="navbar container"></nav>
      </header>
      <div className="header-top">
        <h1 className="header-top-h1">
          We help harmonize cities by combatting misinformation &
          under-representation
        </h1>
        <p className="header-top-p">
          Vngle is a nonpartisan grassroots news agency bringing various angles
          of verified coverage to communities. Our creator community is powered
          by a network of local experts and change-makers working to curate
          deeper more intimate insights on the areas around us
        </p>
      </div>
      <hr />
      <div className="story-window">

        <div className="story-list">
        {data.data.map((story, index) => (
          <div key={story.id} className="story-card">
            <div className="rating">{story.id}</div>
            <h2>{story.attributes.title}</h2>
            <small>published: {story.attributes.date}</small>
            <p>{story.attributes.body.substring(0, 200)}...</p>

            <div className="img-wrapper">
              {story.attributes.media.data.map((img) => {
                return (
                  <div key={img.id} className="img-container">
                    {img.attributes.ext == ".mp4" ? (
                      <video
                        key={img.id}
                        className="img"
                        controls
                        src={`http://localhost:1337${img.attributes.url}`}
                      />
                    ) : img.attributes.ext == ".webm" ? (
                      <video
                        key={img.id}
                        className="img"
                        controls
                        src={`http://localhost:1337${img.attributes.url}`}
                      />
                    ) : (
                      <img
                        key={img.id}
                        className="img"
                        src={`http://localhost:1337${img.attributes.formats.thumbnail.url}`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <Link to={`/details/${story.id}`}>Read more</Link>
            {/* <img src={`http://localhost:1337${data.data[index].attributes.media.data[0].attributes.url}`}/> */}
          </div>
        ))}

        </div>
        <div className="search-box">
              <form action="">
                <label htmlFor="search" > Search:</label>
                <input type="text" name="" id="" />
              </form>
        </div>
        
      </div>
    </div>
  );
}
