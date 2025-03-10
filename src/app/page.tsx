import Image from "next/image";
import { Navigation } from "@/components/common/nav-bar/page";
import { Card } from "@/components/common/card/page";
import { Form } from "@/components/common/form/page";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/people.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <Navigation />
      <section className="h-screen w-screen flex flex-col justify-center items-center p-20">
        {/* <Card/> */}
        <Form/>
      </section>
    </div>
  );
}
