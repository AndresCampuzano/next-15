import { Hello } from "@/app/components/Hello";

export default function Home() {
  console.log("Server component");

  return (
      <>
        <h1 className="text-3xl">Server component</h1>
        <Hello />
      </>
  );
}
