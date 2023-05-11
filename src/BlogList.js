import { Link } from "react-router-dom";
const BlogList = ({blogs,titles}) => {
    // const blogs = props.blogs;
    // const titles =props.titles;

    return ( 
        <div className="blog-list">
            <h2>{titles}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                    {/* <button onClick={()=> handelDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;