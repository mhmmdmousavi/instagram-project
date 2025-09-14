import Sidebar from "../shared/Sidebar";
import { CgMenuOreos } from "react-icons/cg";


export default function Profile() {

    const {userId} = useParams()
    const [dataItem , setDataItem] = useState(null)

    async function getUser() {
        try {
            const response = await client.get(`/api${userId}`)
            const data = response.data.user
            console.log(data);
            setDataItem(data)
        } catch (error) {
            console.log(error);     
        }
    }
    useEffect(()=>{
        getUser()
    }, [])    

    return(
        <div>
            <Sidebar/>
            <div className="flex flex-col pl-[30%] items-center text-black pr-4 pt-4">
                <div className="flex flex-row items-center gap-4 mt-6 mb-20">
                    <img className="rounded-full border-2 border-red-500" src="../../public/lewis.jpg" alt="" />
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-center gap-4">
                            <p>mkbhd</p>
                            <button className="bg-gray-300 px-2 py-1 rounded-lg font-bold">Following ˅</button>
                        </div>
                        <div className="flex flex-row gap-2">
                            <p className="font-bold">1,861 <span className="font-medium">posts</span></p>
                            <p className="font-bold">4M <span className="font-medium">followers</span></p>
                            <p className="font-bold">454 <span className="font-medium">following</span></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold">Marques Brownlee</p>
                            <p>I promise I won't overdo the filters.</p>
                            <a href="#">mkbhd.com</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-t w-full items-center">
                    <div className="flex flex-row items-center py-2"><CgMenuOreos /><p>Posts</p></div>
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                        <img className="" src="../../public/post.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}