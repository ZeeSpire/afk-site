import Navbar from "@/app/components/en/navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar roUrl="/ro" />
      <main className="flex-grow">
        about
      </main>
    </div>
  );
}