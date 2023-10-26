"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Chat() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="max-w-[560px] min-h-[500px]">
      <Accordion>
        <AccordionItem aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
