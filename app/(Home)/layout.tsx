import React from "react";

import Footer from "../(Components)/Footer";

type Props = {
  children?: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      {children}
      <div className="bg-black/90 w-full">
        <Footer />
      </div>
    </>
  );
}
