import { SessionProvider } from "next-auth/react";

import Navbar from "../../component/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
