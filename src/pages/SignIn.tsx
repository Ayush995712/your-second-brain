import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function SignIn() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    async function handleSignIn() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "api/v1/signin", {
            username,
            password
        })
        const jwt = response.data.token;
        if (jwt) {
            localStorage.setItem("jwt", jwt);
            alert("You have signed in successfully!");
            window.location.href = "/dashboard";
        } else {
            alert("Incorrect credentials");
        }
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input ref={usernameRef} placeholder="Username" />
            <Input ref={passwordRef} placeholder="Password" />
            <div className="flex justify-center pt-4">
                <Button onClick={handleSignIn} loading={false} variant="primary" text="SignIn" fullWidth={true} />
            </div>
        </div>
    </div>
}