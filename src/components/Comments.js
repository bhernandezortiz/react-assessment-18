import React, { useState, useEffect } from 'react';

function Comments() {
  const [userComments, setUserComments] = useState([]);

    // Insturction:
    // Use endpoint: https://jsonplaceholder.typicode.com/comments to get a list of comments. 
    // display the comment body on the screen
    // add event listeners to each comment body that when clicked will simply console.log the comment id.

    // you will need to use the useEffect hook. Do this in async / await syntax.
    
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      setUserComments(data);
    }
    getData();
  }, []);

  function handleClick(id) {
    console.log(id);
  }

  return (
    <div>
      {userComments.map(current => (
        <h1 key={current.id} onClick={() => handleClick(current.id)}>
          {current.body}
        </h1>
      ))}
    </div>
  );
}

export default Comments;