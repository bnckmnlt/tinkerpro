import { Metadata } from "next";
import Installing from "./client";

export const metadata: Metadata = {
  title: "Installing the POS Hardware",
};

export default function Page() {
  return <Installing />;
}
