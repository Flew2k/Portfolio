import { Text } from "@/components";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { InboxIcon, InstagramIcon } from "@/components/icons";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const LandingPageWelcomeSection: NextPage = () => {
  const router = useRouter();
  return (
    <div
      className={
        "w-full h-screen flex flex-col justify-between items-center bg-[#051A16] overflow-hidden"
      }
    >
      <div className="flex flex-row justify-between w-full px-5 pt-5 mx-auto">
        <div className="flex flex-row items-center gap-1 select-none">
          <Text variant="tn" color="white">
            Flew
          </Text>
          <Text variant="tn" color="primary">
            .
          </Text>
        </div>
        <div className="flex flex-row items-center gap-4">
          <InstagramIcon
            className="cursor-pointer"
            onClick={() => {
              router.push('https://www.instagram.com/wpdoubleg/')
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

      {/* TODO Background text image */}
      {/* bg-center bg-no-repeat bg-contain bg-origin-border bg-clip-content bg-developer */}

      <div className="w-full h-full px-5 pt-5 mx-auto overflow-hidden bg-center bg-no-repeat bg-contain bg-me bg-origin-border bg-clip-content">
        <div className="grid w-full h-full grid-cols-3 grid-rows-1">
          <div className="flex flex-col items-start justify-end pb-10">
            <Text variant="tt" className="pb-5 " color="white">
              Hey There, I’m Dulguun
            </Text>
            <Button type="primary">Developer</Button>
          </div>
          <div className="flex justify-center">
            {/*  */}
          </div>
          <div className="flex items-end pb-10">
            {/* TODO Short introduction text */}
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
