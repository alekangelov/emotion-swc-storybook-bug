import { Index } from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const Meta = {
  title: "components/index",
  component: Index,
} as ComponentMeta<typeof Index>;

export default Meta;

export const Primary: ComponentStory<typeof Index> = () => <Index />;
