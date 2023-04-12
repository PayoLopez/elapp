import type { Meta, StoryObj } from "@storybook/react";

import { Example } from "./Example";

const meta: Meta<typeof Example> = {
  title: "Example/Example",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

const handleClick = () =>{
    console.log("hola")
}

export const Primary: Story = {
  args: {
    handleClick: handleClick,
    title: "Click me"
  },
};

export const Secondary: Story = {
    args: {
      handleClick: handleClick,
      title: "Estoy deshabilitado",
      disabled:true
    },
  };
  

