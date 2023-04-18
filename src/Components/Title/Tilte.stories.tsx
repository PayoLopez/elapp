import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "Example/Title",
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

const handleChange = (evento:any) =>{
  console.log(evento.target.value)
}

export const Primary: Story = {
  args: {
    
  },
};