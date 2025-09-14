import { IoIosMore } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiSaveDown2 } from "react-icons/ci";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib";
import { TiHeartFullOutline } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";



export default function PostsCard({ _id, title, content, user}) {
        const [postData, setPostData] = useState([])
        const[like , setlike] =useState(false)
    async function getPostContenets() {
        try {
            const access_token = localStorage.getItem("access")
            const response = await client.get(`api/article/${_id}`,{
            headers: {Authorization:`Bearer ${access_token}`}
        })
            const data = response.data
            setPostData(data)
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=> {getPostContenets()},[])

    return(
        <div>
            <div className="flex flex-row justify-between pb-2 items-center border-b ">
                <Link to={`/user/u/${user.username}`}>
                    <div className="flex flex-row items-center gap-4">
                        <img className="w-12 h-12 rounded-full border border-red-600" src={user.profilepicture} alt="profile" />
                        <p className="text-lg">{user.username}</p>
                    </div>
                </Link>
                <IoIosMore />
            </div>
            <img className="mx-auto" src="../../lewispicture.png" alt="lewispicture"/>
            <div className="flex flex-row justify-between pt-2 ">
                <div className="flex flex-row gap-4 items-center">
                
                    <AiOutlineHeart  onClick={()=> setlike(!like)} className={like?"text-4xl fill-red-600": " text-4xl"}/>
                    <IoChatbubbleOutline />
                </div>
                <CiSaveDown2 />
            </div>
            <p className="text-lg">741,368 likes</p>
            <div className="flex flex-col items-start mt-2 mb-4">
                <p className="text-xl">{title}</p>
                <p className="text-lg">{user.username} <span className="font-light">{content}</span></p>
                <button className="text-lg">See translation</button>
                <button className="text-lg">View all 13,384 comments</button>
                <input className="text-lg" type="text" placeholder="Add a comment…"/>
            </div>
        </div>
    )
}