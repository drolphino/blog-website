import { Link } from "react-router-dom";


interface BlogCardProp{
    
    authorName: string;
    title : string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProp)=>{
    return <Link to={`/blog/${id}`}>
        <div className=" p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                
                <Avatar name = {authorName}  size="small"/> 

                <div className=" pl-2 font-light text-sm flex justify-center flex-col">
                    {authorName}
                </div> 
                <div className=" pl-2 text-xs flex justify-center flex-col ">
                    <div className=" relative inline-flex items-center justify-center w-1 h-1 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400"></div>
                </div>
                <div className=" text-slate-500 pl-2 font-thin text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="w-full text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content . length/100)} minute(s) read`}
            </div>
            
        </div>
    </Link> 
}

 export function Avatar( { name,size="small"} :{ name:string, size:"small"|"big" }){
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size == "small"?"w-6 h-6":"w-10 h-10"}`}>
    <span className={`${size == "small"?"text-xs":"text-md"} text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}