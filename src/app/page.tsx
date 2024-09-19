import { Metadata } from "next";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Index from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Protein Bind: a leading research platform for drug discovery",
  description: "This is a description for Protein Bind",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
