import { ContactForm } from "./";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof ContactForm> = {
  title: "Components/Contact Form",
  component: ContactForm,
};

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};

export default meta;
