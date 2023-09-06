import { Metadata } from "next";
import Docs from "./client";

export const metadata: Metadata = {
  title: "Packages",
};

export default function Page() {
  return (
    <>
      <Docs />
    </>
  );
}
