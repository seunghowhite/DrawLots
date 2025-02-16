import Footer from "@/components/footer/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen bg-[#F6F6F6]">
      {children}
      <Footer />
    </main>
  );
}
