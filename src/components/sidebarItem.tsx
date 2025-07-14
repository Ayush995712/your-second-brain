import type { ReactElement } from "react";

export function SideBarItem({text, icon}: {text: string, icon: ReactElement}) {
    return (
        <div className="flex items-center gap-2 p-4 hover:bg-gray-100 cursor-pointer max-w-48 pr-2 rounded-md">
            <div className="flex text-gray-700 py-2">
                <div className="pr-2">
                    {icon}
                </div> 
                <div>
                    {text}
                </div>
            </div>
        </div>
    );
    
}