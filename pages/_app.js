import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react"; 

import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "src/store";
import { GlobalContextProvider } from "@/src/context/GlobalContext";

const seoMetaData = {
  title:
    "Xplainerr | Upskilling & Interview Prep for AI, PM, Engineering, and Design",
  description:
    "Upskill and prepare for your interviews by learning all the concepts which are highly useful in your daily professional job",
  ogTitle:
    "Xplainerr - Accelerate your tech, design, marketing career with microlearning courses",
  ogDesciption:
    "Boost your tech, design, and marketing career with Xplainerr's microlearning courses. Gain valuable skills and accelerate your professional growth through our concise and focused online lessons",
  ogUrl: "https://xplainerr.com",
  ogImage: "https://ik.imagekit.io/zwxa4kttt/home/xplainerr-home.jpg",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Init AOS
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      // console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  

  return (
    <>
      {/* <Script id="show-banner" strategy="afterInteractive">
        {`
          window.$crisp=[];window.CRISP_WEBSITE_ID="37b92c03-a81a-49e0-9f23-a4c3701f13f5";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `}
      </Script> */}

      <CommonHead
        title={seoMetaData.title}
        description={seoMetaData.description}
        ogTitle={seoMetaData.ogTitle}
        ogDescription={seoMetaData.ogDesciption}
        ogImage={seoMetaData.ogImage}
      />

     
<SessionProvider session={pageProps.session}>
<Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalContextProvider>
              <Component {...pageProps} />
              <Toaster position="top-right" />
            </GlobalContextProvider>
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
