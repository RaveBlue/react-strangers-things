import React, { useState, useEffect } from 'react';
 const BASE_URL = 'https://strangers-things.herokuapp.com/api';
 const COHORT_NAME = '2209-FTB-ET-WEB-PT';

 const Posts = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
     fetch(`${BASE_URL}/${COHORT_NAME}/posts`)
       .then(response => response.json())
       .then(result => {
         setPosts(result.data.posts);
         console.log('this is my data', result.data.posts);
       })
       .catch(console.error);
   }, []);

   return (
     <div className="posts-container">
       <h1>This is posts</h1>
       <ul>
         {posts.map(post => {
           return (
             <li key={post._id} className="post-card">
               <p>
                 {post.title}
               </p>
               <p>
                 {post.description}
               </p>
               <p>
                 {post.price}
               </p>
               <p>
                 {post.location}
               </p>
               <p>
                 {post.willDeliver}
               </p>
               <p>
                 {post.author.username}
               </p>
             </li>
           );
         })}
       </ul>
     </div>
   );
 };

 export default Posts;