import Image from "next/image";
import Link from "next/link";
import { BookOpen, Mic, Upload } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="wrapper hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Your books, <br />
            <span className="hero-title-accent">alive with conversation.</span>
          </h1>
          <p className="hero-subtitle">
            Upload any PDF and start a voice conversation with your book.
            Ask questions, explore ideas, and learn — just by talking.
          </p>

          <div className="hero-actions">
            <Link href="/books/new" className="hero-btn-primary">
              <Upload className="w-5 h-5" />
              Upload a Book
            </Link>
            <Link href="/" className="hero-btn-secondary">
              <BookOpen className="w-5 h-5" />
              Browse Library
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <Upload className="w-4 h-4" />
              </div>
              <span>Upload any PDF</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <Mic className="w-4 h-4" />
              </div>
              <span>Talk to your books</span>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <BookOpen className="w-4 h-4" />
              </div>
              <span>AI-powered insights</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-illustration-wrapper">
            <Image
              src="/assets/hero-illustration.png"
              alt="Books coming alive with conversation"
              width={480}
              height={480}
              className="hero-illustration"
              priority
            />
          </div>
          <div className="hero-glow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
