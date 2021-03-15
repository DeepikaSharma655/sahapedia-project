import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Layout from '../components/Layout';
// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  
    return (<Layout><div>
        <div className="card-section row">
         {posts.map((post) => (
      <div className="card col-md-3">
  <img className="card-img-top"src="../images/download.svg" onError={(e)=>{e.target.onerror = null; e.target.src="../images/download.svg"}}  alt={post.title}/>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <h4 className="card-title">{post.city}</h4>
    <p className="card-text">{ReactHtmlParser(post.summary) }</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
 ))}
    
      </div>
      </div>
      </Layout>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.]
    // You can use any data fetching library
    const res = await fetch('http://65.0.167.59/sahapedia2.0/backend/entity/getMuseums')
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  
  export default Blog
  