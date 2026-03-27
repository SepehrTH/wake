import Link from "next/link";
import { Plus } from "lucide-react";
import { sampleDocuments } from "@/lib/constants";
import DocumentCard from "@/components/DocumentCard";

const LibraryPage = () => {
  return (
    <div className="library-container">
      <div className="wrapper">
        <div className="library-header">
          <div>
            <h1 className="library-title">Your Library</h1>
            <p className="library-description">
              Your personal collection of documents, ready to talk to.
            </p>
          </div>
          <Link href="/documents/new" className="library-add-btn">
            <Plus className="w-5 h-5" />
            Add a New Document
          </Link>
        </div>

        <div className="library-grid">
          {sampleDocuments.map((doc) => (
            <DocumentCard
              key={doc._id}
              title={doc.title}
              author={doc.author}
              coverURL={doc.coverURL}
              slug={doc.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
