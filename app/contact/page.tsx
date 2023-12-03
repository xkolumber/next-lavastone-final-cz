import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "V případě dotazů nás prosím kontaktujte.",
  openGraph: {
    title: "Kontakt",
    description: "V případě dotazů nás prosím kontaktujte.",
    images: [
      {
        url: "https://storage.googleapis.com/lavastone/uvod/uvod_foto.jpg",
        alt: "Titulná fotka lávy",
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <div className="template">
        <div className="fixed_height" />
        <div className="inside">
          <h1>Kontakt</h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
