import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modaal";

const meta: Meta<typeof Modal> = {
  title: "Example/ Modaal",
  component:  Modal,
};

export default meta;
type Story = StoryObj<typeof  Modal>;

const handleConfirm = () =>{
  console.log("Confirmaste la accion")
}

export const Primary: Story = {
  args: {
    handleConfirm:handleConfirm
  },
};
