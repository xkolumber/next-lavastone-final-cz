import React from "react";
import IntroductionNext from "./components/IntroductionNext";
import CardCollection from "./components/CardCollection";
import UniqueElement from "./components/UniqueElement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavastone | Váš partner pro interiérový design",
  description:
    "Vytvoříme design a provedení, které sofistikovaným způsobem doplní váš interiér nebo exteriér.",
  keywords: ["Lavastone", "Interiérový dizajn"],
  openGraph: {
    title: "Lavastone | Váš partner pro interiérový design",
    description:
      "Vytvoříme design a provedení, které sofistikovaným způsobem doplní váš interiér nebo exteriér.",
    images: [
      {
        url: "https://storage.googleapis.com/lavastone/uvod/uvod_foto.jpg",
        alt: "Titulná fotka lávy v Lavastone",
      },
    ],
  },
};

const page = () => {
  return (
    <main>
      <IntroductionNext />
      <CardCollection />
      <div className="product_silver">
        <UniqueElement />
      </div>
    </main>
  );
};

export default page;
