import { Metadata } from "next";
import PrivacyPolicy from "./client";

export const metadata: Metadata = {
  title: "Data & Privacy Policy",
};

export default function Page() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
