import type { Meta, StoryObj } from "@storybook/react";

import { Modaal } from "./Modaal";

const meta: Meta<typeof Modaal> = {
  title: "Example/ Modaal",
  component:  Modaal,
};

export default meta;
type Story = StoryObj<typeof  Modaal>;

const handleChange = (evento:any) =>{
  console.log(evento.target.value)
}

export const Primary: Story = {
  args: {
    
  },
};
