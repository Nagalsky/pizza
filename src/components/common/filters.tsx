import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from ".";
import { Input } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title size="sm" className="mb-5 font-bold">
        Фильтрация
      </Title>

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6">
        <p className="mb-4 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" placeholder="1000" min={10} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={5}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Соленные огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Соленные огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
