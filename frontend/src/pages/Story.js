import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gmf from 'remark-gfm';
import axios from "axios";
import "./story.css"

const Story = () => {
  const [story, setStory] = useState("No Story Loaded")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/story")
      .then(response => {
        setStory(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  if (loading) {
    return <p>Story is Loading...</p>
  }

  return (
    <div className="story-container">
      <div className="story-content">
        <ReactMarkdown remarkPlugins={[gmf]}>{story}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Story;

