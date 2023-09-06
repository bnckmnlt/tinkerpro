import { Metadata } from "next";
import AboutUs from "./client";

export const metadata: Metadata = {
  title: "About us",
};

export default function Page() {
  return (
    <>
      <AboutUs />
    </>
  );
}
