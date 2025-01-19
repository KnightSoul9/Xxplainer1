import { GA_MEASUREMENT_ID } from "@/src/config/analytics";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

const defaultOgTitle = "Xplainerr";
const defaultOgDescription =
  "Accelerate your tech career - Learn & Practice for interviews | Xplainerr ";
const defaultOgURL = "https://xplainerr.com";
const defaultOgImage =
  "https://ik.imagekit.io/zwxa4kttt/home/xplainerr-home.jpg";
const defaultContent =
  "xplainerr, product management, learn api, learn pricing, learn chatGPT, learn system design";

const CommonHead = ({
  title,
  description,
  ogTitle,
  ogImage,
  ogUrl,
  content,
}) => {
  const ogTitleValue = ogTitle ? ogTitle : defaultOgTitle;
  const ogDescriptionValue = description ? description : defaultOgDescription;
  const ogUrlValue = ogUrl ? ogUrl : defaultOgURL;
  const ogImageValue = ogImage ? ogImage : defaultOgImage;
  const keyWords = content ? content : defaultContent;
  // console.log(keyWords, "keyWords");

  const router = useRouter();
  const currentPath = `${defaultOgURL}${router.asPath}`;
  const path = new URL(currentPath);
  const currentCanonicalURL = path.origin + path.pathname;
  // console.log(currentCanonicalURL, "currentCanonicalURL");

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='favicon.ico' />

        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />

        <link rel='canonical' href={currentCanonicalURL}></link>

        {/* Open Graph */}
        {/* Test  */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={ogUrlValue} />
        <meta property='og:title' content={ogTitleValue} />
        <meta property='og:description' content={ogDescriptionValue} />
        <meta property='og:image' itemProp='image' content={ogImageValue} />

        <meta name='keywords' content={keyWords} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={ogUrl} />
        <meta property='twitter:title' content={ogTitleValue} />
        <meta property='twitter:description' content={ogDescriptionValue} />
        <meta property='twitter:image' content={ogImageValue} />

        {/* For Facebook Insights  */}
        <meta property='fb:app_id' content='XXXXXXX' />

        <meta name='twitter:site' content='@HQdeepak' />
      </Head>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy='afterInteractive'
      />

      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      <Script id='clarity-script' strategy='afterInteractive'>
        {`
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "kdj26tgi3j");
        
        `}
      </Script>
    </>
  );
};

export default CommonHead;
