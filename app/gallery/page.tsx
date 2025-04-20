import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GalleryGrid from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Gallery
        </h1>
        <GalleryGrid />
      </div>
      <Footer />
    </main>
  );
}
