import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog})=>{
    return <div>
        <Appbar />
        
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full  max-w-screen-lg  pt-12">
            
                <div className=" col-span-8 ">
                    <div className="text-5xl font-extrabold pt-2">
                        {blog.title}
                    </div> 
                    <div className="text-slate-500 pt-2">
                        read  first
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 pl-15">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    
                    <div className="flex">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar name={blog.author.name ||"Anonymous"} size="big"/> 
                        </div>
                        
                        <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Each one us has somethig unique through which we can carve out own path
                                </div>
                        </div>

                    </div>
                    
                    
                </div>
            </div>

        </div>
    </div>
    
}