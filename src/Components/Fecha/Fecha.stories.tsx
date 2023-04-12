import type { Meta, StoryObj } from "@storybook/react";

import { Fecha } from "./Fecha";

const meta: Meta<typeof Fecha> = {
  title: "Example/Fecha",
  component: Fecha,
};

export default meta;
type Story = StoryObj<typeof Fecha>;

const handleChange = (evento:any) =>{
  console.log(evento.target.value)
}

export const Primary: Story = {
  args: {
    handleChange: handleChange,
  },
};


