import { Metadata } from "next";
import ContactUs from "./client";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function Page() {
  return (
    <>
      <ContactUs />
    </>
  );
}
