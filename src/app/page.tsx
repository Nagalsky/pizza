import { Title, TopBar } from "@/components/common";

export default function Home() {
  return (
    <>
      <div className="container py-10">
        <Title size="lg" className="font-extrabold">
          Все пиццы
        </Title>
      </div>
      <TopBar />
    </>
  );
}
