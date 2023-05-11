import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs, isPending, error}= useFetch('http://localhost:8000/blogs')

    // const [name, setName] = useState('mario')

    // const handelDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id )
    //     setBlogs(newBlogs)
    // }



    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <h2>Loading...</h2>}
            {blogs && <BlogList blogs ={blogs} titles = 'All Blogs!'/>}
            {/* <button onClick={()=> setName('lugi')}>change name</button>
            <p>{name}</p> */}
        </div>
     );
    }
 
export default Home;
//<BlogList blogs ={blogs.filter((blog)=> blog.author === 'mario')} titles = 'Mario Blogs!' />