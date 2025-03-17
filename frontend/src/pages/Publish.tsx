import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="flex justify-center pt-12">
                <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
                    {/* Title Input */}
                    <input
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                        type="text"
                        placeholder="Give your story a powerful title..."
                        className="w-full text-4xl font-extrabold bg-transparent border-none outline-none 
                            focus:ring-0 placeholder-gray-400 text-gray-900"
                    />
                    
                    {/* Content Editor */}
                    <TextEditor onChange={(e)=>{
                        setDescription(e.target.value)
                    }} />
                    <div className="flex justify-end px-6 py-4 border-t border-gray-200 bg-white">
                        <button onClick={async()=>{
                            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                                title,
                                content:description
                            },{
                                headers:{
                                    Authorization:localStorage.getItem("token")
                                }
                            });
                            navigate(`/blog/${response.data.id}`)
                        }}
                            type="submit"
                            className="px-6 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 
                                rounded-full shadow-md hover:opacity-90 focus:ring-2 focus:ring-blue-400 transition-all"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return (
        <form className="w-full mt-6 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
            <div className="px-5 py-4 bg-white rounded-t-lg">
                <textarea
                    onChange={onChange}
                    className="w-full min-h-[400px] text-lg text-gray-900 bg-transparent border-0 
                        focus:ring-0 outline-none placeholder-gray-400 leading-relaxed resize-none"
                    placeholder="Start writing your story..."
                    required
                ></textarea>
            </div>
            
        </form>
    );
}
