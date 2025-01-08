import { cn } from "@/lib/utils";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5",
        className,
      )}
    >
      <div className="container flex items-center justify-between">
        <Categories />
        <SortPopup />
      </div>
    </div>
  );
};
