import react, { useState, useEffect } from "react";

function FetchData() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <>
      <button onClick={() => setResourceType("posts")}>post</button>
      <button onClick={() => setResourceType("users")}>user</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <div>{resourceType}</div>
      {items.map((i) => {
        return <pre>{JSON.stringify(i)}</pre>;
      })}
    </>
  );
}

export default FetchData;
