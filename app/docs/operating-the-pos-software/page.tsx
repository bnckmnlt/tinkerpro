import { Metadata } from "next";
import Operating from "./client";

export const metadata: Metadata = {
  title: "Operating the POS Software",
};

export default function Page() {
  return <Operating />;
}
