import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";


export const Blog = ()=>{
    
    const { id } = useParams();
    const {loading,blog} =useBlog({
        id:id||""
    });
    if(loading){
        return <div>
            <Appbar/>
            <div className="flex justify-center">
                loading ...
            </div>
            
        </div>
        
    }
    if (!blog) {
        return <div>Error: Blog not found</div>; 
    }

    return <div>
        <FullBlog blog={blog}/>
    </div>
}