import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopStrip from "@/components/TopStrip";

/** Layout das páginas de marketing (com barra, header e rodapé completos). */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopStrip />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
