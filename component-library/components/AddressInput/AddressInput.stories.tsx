import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AddressInput } from "./AddressInput";

export default {
  title: "AddressInput",
  component: AddressInput,
  argTypes: {
    variant: { control: false },
    isDisabled: { control: false },
    avatarUrlProps: { control: false },
  },
} as ComponentMeta<typeof AddressInput>;

const Template: ComponentStory<typeof AddressInput> = (args) => (
  <AddressInput {...args} />
);

export const AddressInputDefault = Template.bind({});
AddressInputDefault.args = {
  subtext: "Please enter a valid wallet address",
};

export const AddressInputLoading = Template.bind({});
AddressInputLoading.args = {
  subtext: "Fetching ENS address...",
  isLoading: true,
};

export const AddressInputError = Template.bind({});
AddressInputError.args = {
  subtext: "Error fetching address",
  isError: true,
};