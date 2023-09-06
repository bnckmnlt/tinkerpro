import { Metadata } from "next";
import ResellerPackage from "./client";

export const metadata: Metadata = {
  title: "Reseller Package",
};

export default function Page() {
  return (
    <>
      <ResellerPackage />
    </>
  );
}
