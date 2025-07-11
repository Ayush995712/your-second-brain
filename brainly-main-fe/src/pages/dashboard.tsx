import { Button } from "../components/button"
import { Card } from "../components/card"
import { CreateContentModal } from "../components/createContentModal"
import { Sidebar } from "../components/sidebar"
import { useContent } from "../hooks/useContent"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { useState } from "react"

export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const content = useContent();

  return <div>
    <Sidebar />

    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />
        <div className="flex justify-end gap-4">
            <Button onClick={() => {
              setModalOpen(true)
            }} variant="primary" text="Add content" startIcon={<PlusIcon/>}></Button>
            <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
        </div>

        <div className="flex gap-4">
          {content.map(({type, link, title}) => <Card type={type} link={link} title={title}/>)}

        </div>
    </div>
  </div>
  
}