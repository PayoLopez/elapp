import type { Meta, StoryObj } from "@storybook/react";

import { MyModal } from "./Modal";

const meta: Meta<typeof MyModal> = {
  title: "Example/MyModal",
  component: MyModal,
};

export default meta;
type Story = StoryObj<typeof MyModal>;


export const Primary: Story = {
  args: {
   
  },
};


