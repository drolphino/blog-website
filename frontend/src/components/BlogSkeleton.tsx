export const BlogSkeleton = ()=>{
    return <div role="status" className="animate-pulse">
        <div>
                    <div className=" p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                        <div className="flex">
                            
                            <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
            
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            <div className=" pl-2 text-xs flex justify-center flex-col ">
                                <div className=" relative inline-flex items-center justify-center w-1 h-1 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400"></div>
                            </div>
                            <div className=" text-slate-500 pl-2 font-thin text-sm flex justify-center flex-col">
                                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            </div>
                        </div>
                        <div className="text-xl font-semibold pt-2">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                        <div className="text-md font-thin">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                        <div className="w-full text-slate-500 text-sm font-thin pt-4">
                            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                        
                    </div>
        </div>
        
        <span className="sr-only">Loading...</span>
    </div>
    
    
}