import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./sidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-700">
                <Logo />
            </div>
            Brainly
        </div>
        <div className="pt-4 pl-4">
            <SideBarItem text="Tweets" icon={<TwitterIcon />} />
            <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}