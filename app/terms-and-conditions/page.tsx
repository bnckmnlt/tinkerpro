import { Metadata } from "next";
import TermsAndConditions from "./client";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function Page() {
  return (
    <>
      <TermsAndConditions />
    </>
  );
}
