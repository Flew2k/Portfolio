import { Container } from "@/components/container";
import { NextPage } from "next";
import React from "react";

export const LandingPageWelcomeSection: NextPage = () => {
  return (
    <div
      className={
        "w-full h-screen flex flex-col justify-between items-center gap-4 bg-[#051A16] overflow-hidden"
      }
    >
        <div className="flex flex-row justify-between w-full p-5 mx-auto">
            <div>1</div>
            <div>2</div>
        </div>
    </div>
  );
};
