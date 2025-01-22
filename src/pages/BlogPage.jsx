import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogById } from '../api';
import ClipLoader from "react-spinners/ClipLoader";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "violet",
  };


const BlogPage = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()


    useEffect(() => {
        async function getBlogById() {
            try {
                const data = await blogById(id)
                setBlog(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        getBlogById();
    }, [id])

    if (loading) return (
        <ClipLoader
        loading={loading}
        cssOverride={override}
        size={450}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='md:my-5 md:ml-[8rem] my-[12rem] h-[50vh] w-full md:w-[80%] flex items-center justify-center flex-col'>
        <h3 className='text-3xl text-violet-950 my-10 md:text-center font-bold'>Blog Details</h3>
        <div className="container w-[90%] border-2 text-justify gap-5 md:text-center capitalize rounded text-3xl p-4 mb-4">
      <h1 className="text-3xl text-violet-950 font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.body}</p>
    </div>
    </div>
  )
}

export default BlogPage