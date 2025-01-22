import React, { useEffect, useState } from 'react';
import { allBlogs } from '../api';
import BlogCard from '../components/blogCard';
import LeafletMap from './LeafletMap';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "violet",
};

function HomePage() {
  const [blogs, setBlogs] = useState([]);     
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState();    
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await allBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getPosts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  if (loading) return (
    <ClipLoader
    loading={loading}
    cssOverride={override}
    size={450}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  )
  if (error) return <p>Error: {error.message}</p>;

  return (
 <div className='mt-16'>
     <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center text-violet-950 font-bold mb-4">All Blogs</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {filteredPosts.length > 0 ? (
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 pr-10'>
        {filteredPosts.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
      ) : (
        <p>No posts found for "{searchQuery}"</p>
      )}
    </div>
 </div>
  );
}

export default HomePage;
