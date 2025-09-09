"use client";

import {
  Section,
  Cell,
  Image,
  List,
  InlineButtons,
  Avatar,
  Button,
  Chip,
  Select,
  Text,
  Card,
} from "@telegram-apps/telegram-ui";

export default function Home() {
  return (
    <div>
      <Card>
        <div>
          <Avatar size={96} src="users/a69faf15ea0d1364b279819237a3fed3dca2c676.jpg" />
          <div>
            <Text>Username</Text>
          </div>
          <div>
            <Text>Your rank #2932</Text>
          </div>
        </div>

        <div>
          <Text>Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3.</Text>

          <Button mode="gray" size="l">
            Read more
          </Button>
        </div>
      </Card>

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
