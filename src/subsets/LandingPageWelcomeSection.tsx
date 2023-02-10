import { Text } from "@/components";
import { Container } from "@/components/container";
import { InboxIcon, InstagramIcon } from "@/components/icons";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

export const LandingPageWelcomeSection: NextPage = () => {
  return (
    <div
      className={
        "w-full h-screen flex flex-col justify-between items-center bg-[#051A16] overflow-hidden"
      }
    >
      <div className="flex flex-row justify-between w-full px-5 pt-5 mx-auto">
        <div className="flex flex-row items-center gap-1 select-none">
          <Text variant="tn" color="white">
            Duuk
          </Text>
          <Text variant="tn" color="primary">
            .
          </Text>
        </div>
        <div className="flex flex-row items-center gap-4">
          <InstagramIcon
            className="cursor-pointer"
            onClick={() => {
              console.log("hehe");
            }}
          />

          <InboxIcon
            className="cursor-pointer"
            onClick={() => {
              console.log("hehe");
            }}
          />
        </div>
      </div>
      <div className="w-full h-full px-5 pt-5 mx-auto overflow-hidden bg-center bg-no-repeat bg-contain bg-origin-border bg-clip-content">
        <div className="grid w-full h-full grid-cols-3 grid-rows-1">
          <div className="flex items-end">
            <Text variant="tt" className="pb-5 " color="white">
              Hey There, I’m Dulguun
            </Text>
          </div>
          <div className="flex items-end">
            <img src="/assets/me.png" alt="me" height={"auto"} width={"auto"} />
          </div>
          <div className="flex items-end">
            <Text variant="bm" color="white" className="pb-5">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
