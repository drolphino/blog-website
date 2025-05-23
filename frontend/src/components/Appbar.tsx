import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () =>{
    return <div className=" border-b flex justify-between px-10 py-4">
        
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text tracking-wide uppercase">
            Blogmium
        </div>


                
            
        </Link>
        
        <div >
            <Link to={'/publish'}>
                <button type="button" className=" mr-4 text-white bg-green-700 hover:bg-green-800 
                    focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full 
                    text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        
                    New
                </button>
            </Link>

            <Link to={'/signin'}>
                <button type="button" className=" mr-4 text-white bg-gray-700 hover:bg-green-800 
                    focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full 
                    text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        
                    Signup
                </button>
            </Link>
            

            

            <Avatar name="Random" size="big"/>   
        </div>

    </div>
}