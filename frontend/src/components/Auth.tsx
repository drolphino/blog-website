import { SignupInput } from "@drolphino/medium-common";
import { ChangeEvent, useState } from "react";
import { data, Link, Navigate, useNavigate } from "react-router-dom";
import { Signin } from "../pages/Signin";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,postInputs);
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        }
        catch(e){
            alert("Error while signing up")
        }
       
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
                <div className="text-3xl font-extrabold text-center mb-4">
                    {type === "signin"?"Sign in to your account" : "Create a new account"}
                </div>

                <div className="text-slate-400 text-center mb-6">
                    {type === "signin"?"Don't have an account?" : "Already have and account?"}
                    <Link className="pl-2 underline text-slate-400" to={type ===  "signin"?"/signup":"/signin"}>
                        {type === "signin"?"Sign Up" : "Login"}
                    </Link>
                </div>

                <div className="flex flex-col gap-y-4">
                    {type==="signup"?<LabelledInput label="Name" placeholder="Enter your full name" onChange={(e) => {
                        setPostInputs((prev) => ({
                            ...prev,
                            name: e.target.value
                        }));
                    }} />:null}

                    <LabelledInput label="Username" placeholder="abcd@gmail.com" onChange={(e) => {
                        setPostInputs((prev) => ({
                            ...prev,
                            username: e.target.value
                        }));
                    }} />

                    <LabelledInput label="Password" type="password" placeholder="Atleast 6 digits" onChange={(e) => {
                        setPostInputs((prev) => ({
                            ...prev,
                            password: e.target.value
                        }));
                    }} />

                    <button type="button" 
                            onClick={sendRequest}
                            className="  mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            {type === "signin"?"Sign In" : "Sign Up"}
                    </button>

                </div>
            </div>
        </div>
    );
};

// LabelledInput component
interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type = "text" }: LabelledInputType) {
    return (
        <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
                onChange={onChange}
                type={type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
