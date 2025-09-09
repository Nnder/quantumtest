"use client";

import { Section, Cell, Image, List, InlineButtons, Avatar, Button, Chip, Select } from "@telegram-apps/telegram-ui";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";

export default function Home() {
  return (
    <div>
      <div>
        <Avatar size={96} src="https://avatars.githubusercontent.com/u/84640980?v=4" />
      </div>

      <Button mode="filled" size="s">
        Action
      </Button>

      <Chip>Chip</Chip>

      {/* <List
        style={{
          width: 240,
          background: "var(--tgui--secondary_bg_color)",
        }}
      >
        <Select header="Select">
          <option>Hello</option>
          <option>Okay</option>
        </Select>
      </List> */}
    </div>
  );
}
