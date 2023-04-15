import React from "react";

import TabNavigator from "@/components/TabNavigator";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function ScreenLayout({ children }: Props) {
  return (
    <div className="h-screen overflow-hidden max-w-[414px] bg-white mx-auto relative md:rounded-2xl">
      {children}
      <TabNavigator />
    </div>
  );
}
