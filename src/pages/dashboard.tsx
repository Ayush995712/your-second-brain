import { Button } from "../components/button"
import { Card } from "../components/card"
import { CreateContentModal } from "../components/createContentModal"
import { Sidebar } from "../components/sidebar"
import { useContent } from "../hooks/useContent"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { useState } from "react";
import type { ContentTypeType } from "../components/createContentModal";

export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { content } = useContent();
  const [localContent, setLocalContent] = useState<
    { type: ContentTypeType; link: string; title: string }[]
  >([]);

  // This function will be called when new content is added from the modal
  function handleAddContent(newContent: { type: ContentTypeType; link: string; title: string }) {
    setLocalContent(prev => [...prev, newContent]);
    setModalOpen(false); // Close modal after adding
  }

  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddContent={handleAddContent}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => setModalOpen(true)}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>

        <div className="flex gap-4">
          {/* Render both fetched and newly added content */}
          {Array.isArray(content) &&
            content.map(({ type, link, title }, idx) => (
              <Card key={`remote-${idx}`} type={type} link={link} title={title} />
            ))}
          {localContent.map(({ type, link, title }, idx) => (
            <Card key={`local-${idx}`} type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}