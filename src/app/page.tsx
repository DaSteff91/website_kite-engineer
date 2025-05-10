import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <Main>
          This website is under construction - feel free to contact me via
          stefan@kite-engineer.de Testupdate
        </Main>
        <Footer />
      </body>
    </html>
  );
}
