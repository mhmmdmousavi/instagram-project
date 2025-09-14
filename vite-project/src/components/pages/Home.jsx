import { useEffect, useState } from "react";
import PostsCard from "../shared/postscard";
import Sidebar from "../shared/Sidebar";
import { client } from "../lib";

export default function Home() {
    const [post, setPosts] = useState([])

    async function getPosts() {
        try {
            const access_token = localStorage.getItem("access")
            
            const response = await client.get("api/article/timeline",{
            headers: {Authorization:`Bearer ${access_token}`}
        })
            const data = response.data.Articles
            setPosts(data)
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=> {getPosts()},[])


    return(
        <div className="text-black text-3xl relative pl-[30%] flex flex-col items-center pt-4 pr-6">
            <Sidebar/>
            <div>
                {
                    post.map((post) => {
                        return <PostsCard key={post.id} {...post} />;
                    })
                }
            </div>
        </div>
    )
}