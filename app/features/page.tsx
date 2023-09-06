import { Metadata } from "next";
import Features from "./client";

export const metadata: Metadata = {
  title: "Features",
};

type Props = {};

export default function Page(props: Props) {
  return <Features {...props} />;
}
