"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Separator } from "../ui";
import { SearchInput } from "./search-input";

interface Props {
  hasSearch?: boolean;
  // hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasSearch = true,
  // hasCart = true,
  className,
}) => {
  return (
    <header className={cn("border-b", className)}>
      <div className="container flex items-center justify-between py-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда
            </p>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button variant={"outline"} className="items-centetr flex gap-1">
            <User />
            Войти
          </Button>

          <Button className="group relative">
            <b>520$</b>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart strokeWidth={2} />
              <b>3</b>
            </div>
            <ArrowRight className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Button>
        </div>
      </div>
    </header>
  );
};
