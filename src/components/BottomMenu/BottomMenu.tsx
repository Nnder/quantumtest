"use client";
import { Tabbar } from "@telegram-apps/telegram-ui";
import React, { useState } from "react";

export const BottomMenu = () => {
  const tabs = [
    {
      id: 0,
      text: "Bank",
      src: "/icons/bank.svg",
    },
    {
      id: 1,
      text: "Idea",
      src: "/icons/idea.svg",
    },
    {
      id: 2,
      text: "Chats",
      src: "/icons/chats.svg",
    },
    {
      id: 3,
      text: "Friends",
      src: "/icons/friends.svg",
    },
    {
      id: 4,
      text: "Menu",
      src: "/icons/menu.svg",
    },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  return (
    <Tabbar>
      {tabs.map(({ id, text, src }) => (
        <Tabbar.Item key={id} text={src ? "" : text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
          <img src={src} alt={text} width={24} height={24} />
        </Tabbar.Item>
      ))}
    </Tabbar>
  );
};
