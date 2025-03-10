import Image from "next/image";
import { Navigation } from "@/components/common/nav-bar/page";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/path/to/your/background-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Navigation />
      <div>
        {/* Your other content here */}
      </div>
    </div>
  );
}
