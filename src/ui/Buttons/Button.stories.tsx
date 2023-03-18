import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button } from "./Button"

export default {
  title: "UI/Button",
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>Click Me!</Button>
)

// Standard
export const Primary = Template.bind({})
Primary.args = {
  intent: "primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
  intent: "secondary"
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  intent: "tertiary"
}

export const Danger = Template.bind({})
Danger.args = {
  intent: "danger"
}

export const Success = Template.bind({})
Success.args = {
  intent: "success"
}

export const Link = Template.bind({})
Link.args = {
  intent: "link"
}

// Full Width
export const PrimaryFullWidth = Template.bind({})
PrimaryFullWidth.args = {
  intent: "primary",
  fullWidth: true
}

export const SecondaryFullWidth = Template.bind({})
SecondaryFullWidth.args = {
  intent: "secondary",
  fullWidth: true
}

export const TertiaryFullWidth = Template.bind({})
TertiaryFullWidth.args = {
  intent: "tertiary",
  fullWidth: true
}

export const DangerFullWidth = Template.bind({})
DangerFullWidth.args = {
  intent: "danger",
  fullWidth: true
}

export const SuccessFullWidth = Template.bind({})
SuccessFullWidth.args = {
  intent: "success",
  fullWidth: true
}

// Outline
export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {
  intent: "primary",
  outline: true
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
  intent: "secondary",
  outline: true
}

export const TertiaryOutline = Template.bind({})
TertiaryOutline.args = {
  intent: "tertiary",
  outline: true
}

export const DangerOutline = Template.bind({})
DangerOutline.args = {
  intent: "danger",
  outline: true
}

export const SuccessOutline = Template.bind({})
SuccessOutline.args = {
  intent: "success",
  outline: true
}

// Full Width and Outline
export const PrimaryFullWidthOutline = Template.bind({})
PrimaryFullWidthOutline.args = {
  intent: "primary",
  fullWidth: true,
  outline: true
}

export const SecondaryFullWidthOutline = Template.bind({})
SecondaryFullWidthOutline.args = {
  intent: "secondary",
  fullWidth: true,
  outline: true
}

export const TertiaryFullWidthOutline = Template.bind({})
TertiaryFullWidthOutline.args = {
  intent: "tertiary",
  fullWidth: true,
  outline: true
}

export const DangerFullWidthOutline = Template.bind({})
DangerFullWidthOutline.args = {
  intent: "danger",
  fullWidth: true,
  outline: true
}

export const SuccessFullWidthOutline = Template.bind({})
SuccessFullWidthOutline.args = {
  intent: "success",
  fullWidth: true,
  outline: true
}
