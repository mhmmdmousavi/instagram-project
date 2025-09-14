import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link, Links } from "react-router";
import { useState } from "react";
import Search from "./Search";
import Createpost from "./Createpost";


export default function Sidebar() {
    const username = localStorage.getItem("username")
    const [showsearch, setShowSearch] = useState(false)
    const [showcreate, setCreate] = useState(false)
    
    return(<>
            {showsearch && <Search className="  w-6/12"/>}
            {showcreate && <Createpost className="  w-6/12"/>}
        <div className="w-3/12 h-screen fixed px-4 py-6 bg-white left-0 bottom-0 flex flex-col gap-6 border-r">
            <img className="w-4/12 py-6" src="/Logo.svg" alt="Logo" />
            <Link to={"/home"}><div className="flex flex-row items-center gap-2 text-black"><IoMdHome /><p className="text-lg font-semibold">Home</p></div></Link> 
            <div onClick={()=>setShowSearch(!showsearch)} className="flex flex-row items-center gap-2 text-black"><IoIosSearch/><p className="text-lg font-semibold">Search</p></div>
            <div onClick={()=> setCreate(!showcreate)} className="flex flex-row items-center gap-2 text-black"><CiSquarePlus /><p className="text-lg font-semibold">Create</p></div>
            <Link to={`/user/u/${username}`}>
                <div className="flex flex-row items-center gap-2 text-black"><CgProfile /><p className="text-lg font-semibold">Profile</p></div>
            </Link>
        </div>
        </>
    )
}