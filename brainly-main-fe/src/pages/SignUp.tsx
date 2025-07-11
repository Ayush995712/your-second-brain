import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    async function handleSignUp() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "api/v1/signup", {
            username,
            password
        })
        navigate("/signin");
        alert("You have signed up successfully!");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button onClick={handleSignUp} loading={false} variant="primary" text="SignUp" fullWidth={true} />
            </div>
        </div>
    </div>
}