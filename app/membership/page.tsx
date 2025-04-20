import MemberRegistrationForm from "@/components/member-registration-form";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Member Registration
        </h1>
        <MemberRegistrationForm />
      </div>
      <Footer />
    </main>
  );
}
