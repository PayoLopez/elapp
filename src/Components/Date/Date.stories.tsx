import type { Meta, StoryObj } from "@storybook/react";

import { Date } from "././Date";

const meta: Meta<typeof Date> = {
  title: "Example/Date",
  component: Date,
};

export default meta;
type Story = StoryObj<typeof Date>;

const handleChange = (evento:any) =>{
  console.log(evento.target.value)
}

export const Primary: Story = {
  args: {
    
  },
};