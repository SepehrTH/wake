import Link from "next/link";
import { Plus } from "lucide-react";
import { sampleBooks } from "@/lib/constants";
import BookCard from "@/components/BookCard";

const LibraryPage = () => {
  return (
    <div className="library-container">
      <div className="wrapper">
        <div className="library-header">
          <div>
            <h1 className="library-title">Your Library</h1>
            <p className="library-description">
              Your personal collection of books, ready to talk to.
            </p>
          </div>
          <Link href="/books/new" className="library-add-btn">
            <Plus className="w-5 h-5" />
            Add a New Book
          </Link>
        </div>

        <div className="library-grid">
          {sampleBooks.map((book) => (
            <BookCard
              key={book._id}
              title={book.title}
              author={book.author}
              coverURL={book.coverURL}
              slug={book.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
