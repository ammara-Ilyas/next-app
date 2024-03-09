// import "@/styles/globals.css";
import Navbar from "../../component/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      ;
      <Component {...pageProps} />;
    </>
  );
}
