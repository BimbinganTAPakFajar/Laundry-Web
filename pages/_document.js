import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="max-w-7xl mx-auto">
        <Main />
        <NextScript />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
          defer
        ></script>
      </body>
    </Html>
  );
}
