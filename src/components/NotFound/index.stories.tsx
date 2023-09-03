import { NotFound } from "./";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof NotFound> = {
  title: "Components/Not Found",
  component: NotFound,
};

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {};

export default meta;
