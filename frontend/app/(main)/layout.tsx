import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen bg-[#F6F6F6]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
