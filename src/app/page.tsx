"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <main className="absolute inset-0 flex justify-center items-center text-4xl flex-col ">
      Website content
      <Button className="duration-300" color="primary">
        Button
      </Button>
    </main>
  );
}
