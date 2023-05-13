import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const { posts = [] } = useLoaderData();

        return (
            <div>
                <h1>Blog</h1>

                <ul>
                    {posts.map((item, index) => (
                        <li key={index}>
                            <Link to={`/blog/${item.id}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
}

export default Blog;