import { useLoaderData } from "react-router-dom";

const Article=()=>{
    const { post } = useLoaderData();
        return(
            <div>
                <h1>{post.id} - {post.title}</h1>
                <p>{post.body}</p>
            </div>
        );
}

export default Article