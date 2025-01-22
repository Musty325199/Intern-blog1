import { Link } from "react-router-dom"

const BlogCard = ({blog}) => {
  return (
    <div className="container bg-violet-100 shadow-lg md:mx-10 mx-5 p-5 md:w-[22rem] text-justify w-full capitalize border rounded">
    <ul>
        <li key={blog.id} className="p-4 mb-4">
          <Link to={`/blog/${blog.id}`} className="text-lg text-violet-950 font-semibold">
            {blog.title}
          </Link>
          <p className="text-lg">{blog.body.slice(0, 200)}...</p>
        </li>
    </ul>
  </div>

  )
}

export default BlogCard