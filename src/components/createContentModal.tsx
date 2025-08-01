import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossIcon"
import { Button } from "./button"
import { Input } from "./Input"
import { BACKEND_URL } from "../config";
import axios from "axios";

// controlled component
interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
    onAddContent: (content: { title: string; link: string; type: ContentTypeType }) => void;
}

export const ContentType = {
    YouTube: "youtube",
    Twitter: "twitter"
} as const;
export type ContentTypeType = typeof ContentType[keyof typeof ContentType];

export function CreateContentModal({open, onClose, onAddContent}: CreateContentModalProps) {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState<ContentTypeType>(ContentType.YouTube);

    async function addContent() {
        const title = titleRef.current?.value ?? "";
        const link = linkRef.current?.value ?? "";
        await axios.post(BACKEND_URL + "api/v1/content", {
            link,
            title,
            type
        }, {
            headers: { 
                "Authorization": localStorage.getItem("token")
            }
        });
        onAddContent({ title, link, type })
        onClose();
    }

    return <div>

        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer" >
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"Title"} />
                            <Input ref={linkRef} placeholder={"Link"} />
                        </div>
                        <div>
                            <h1>Type</h1>
                            <div className="flex gap-1 p-4">
                            <Button text="YouTube" variant={type === ContentType.YouTube ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.YouTube);
                            }}></Button>
                            <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.Twitter);
                            }}></Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="Submit" />
                        </div>
                    </span>
                </div>
            </div>}
    </div>
}
