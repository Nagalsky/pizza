import { Filters, ProductsGroupList, Title, TopBar } from "@/components/common";

export default function Home() {
  return (
    <>
      <div className="container pt-10">
        <Title size="lg" className="font-extrabold">
          Все пиццы
        </Title>
      </div>
      <TopBar />
      <div className="container pb-14 pt-10">
        <div className="flex gap-20">
          <div className="w-[250px] shrink-0">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Завтраки"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: "Чизбургер пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
                    price: 550,
                    items: [{ price: 500 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
