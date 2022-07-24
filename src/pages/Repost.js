import React, { useState } from "react";

export default function Repost() {
const [state, setState] = useState( [
  {
    topic: "cars",
    details: "thhgddfgxfcvjh",
  },
  {
    topic: "motor",
    details: "thhgddfgxfcvjh",
  },
])
  
  const [topic, setTopic ] = useState("")
  const [details, setDetails ] = useState("")
  

  function sumbitRepost(e) {
    e.preventDefault()
    
    // state.concat({ topic: topic, details: details });
    
    // state.push(
    //   {
    //     topic: topic,
    //     details: details,
    //   },
    // );

    setState([
      ...state, // spreed operator 
      {
            topic: topic,
            details: details,
      },
    ])
  }

  return (
    <div>
      <div>
<h2>{topic}</h2>
        <form onSubmit={sumbitRepost}>
        <input
          placeholder="topic"
          onChange={(e) => setTopic(e.currentTarget.value)}
          name="topic"
        />

        <input
          placeholder="details"
          onChange={(e)=> setDetails(e.currentTarget.value)}
          name="details"
        />

        <div>
          <button type="submit">hhhdd</button>
        </div>

        </form>
      </div>
      {state.map((item) => {
        return (
          <div
            style={{
              background: "rgb(20,30,100)",
              margin: "10px 0",
            }}
          >
            <div>
              <label>Name: {item.topic}</label>
            </div>

            <div>
              <label>details: {item.details}</label>
            </div>
          </div>
        );
      })}
    </div>
  );
}
