import { Metadata } from "next";
import Troubleshooting from "./client";

export const metadata: Metadata = {
  title: "Troubleshooting",
};

export default function Page() {
  return <Troubleshooting />;
}
