import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <Main>
          This website is under construction - contact me via
          stefan@kite-engineer.de Test
        </Main>
        <Footer />
      </body>
    </html>
  );
}
