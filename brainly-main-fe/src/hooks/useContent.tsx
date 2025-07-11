import { useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
    const [content, setContent] = useState<any[]>([]);

    async function fetchContent() {
        try {
            const response = await fetch(`${BACKEND_URL}api/v1/content`, {
                headers: {
                    "Authorization": localStorage.getItem("token") || ""
                }
            });
            if (!response.ok) {
                throw new Error("Failed to fetch content");
            }
            const data = await response.json();
            setContent(data);
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    }

    return { content, fetchContent };
}