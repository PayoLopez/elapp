import type { Meta, StoryObj } from "@storybook/react";

import { ClickeableCard } from "./ClickeableCard";

const meta: Meta<typeof ClickeableCard> = {
  title: "Example/ClickeableCard",
  component: ClickeableCard,
};

export default meta;
type Story = StoryObj<typeof ClickeableCard>;

const handleChange = (evento:any) =>{
  console.log(evento.target.value)
}

export const Primary: Story = {
  args: {
    
  },
};
