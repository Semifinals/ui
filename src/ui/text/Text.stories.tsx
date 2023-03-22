import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Text } from "./Text"

export default {
  title: "UI/text/Text",
  component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => (
  <Text {...args}>Lorem ipsum dolor sit amet</Text>
)

const InverseTemplate: ComponentStory<typeof Text> = args => (
  <div className="w-full h-full bg-black">
    <Text {...args}>Lorem ipsum dolor sit amet</Text>
  </div>
)

// Default
export const Default = Template.bind({})
Default.args = {}

// Colors
export const NormalColor = Template.bind({})
NormalColor.args = {
  color: "normal"
}

export const InverseColor = InverseTemplate.bind({})
InverseColor.args = {
  color: "inverse"
}

export const FadedColor = Template.bind({})
FadedColor.args = {
  color: "faded"
}

export const LessFadedColor = Template.bind({})
LessFadedColor.args = {
  color: "lessfaded"
}

// Sizes
export const ExtraSmallSize = Template.bind({})
ExtraSmallSize.args = {
  size: "xs"
}

export const SmallSize = Template.bind({})
SmallSize.args = {
  size: "sm"
}

export const BaseSize = Template.bind({})
BaseSize.args = {
  size: "base"
}

export const LargeSize = Template.bind({})
LargeSize.args = {
  size: "lg"
}

export const ExtraLargeSize = Template.bind({})
ExtraLargeSize.args = {
  size: "xl"
}

export const TwoExtraLargeSize = Template.bind({})
TwoExtraLargeSize.args = {
  size: "2xl"
}

export const ThreeExtraLargeSize = Template.bind({})
ThreeExtraLargeSize.args = {
  size: "3xl"
}

export const FourExtraLargeSize = Template.bind({})
FourExtraLargeSize.args = {
  size: "4xl"
}

export const FiveExtraLargeSize = Template.bind({})
FiveExtraLargeSize.args = {
  size: "5xl"
}

export const SixExtraLargeSize = Template.bind({})
SixExtraLargeSize.args = {
  size: "6xl"
}

export const SevenExtraLargeSize = Template.bind({})
SevenExtraLargeSize.args = {
  size: "7xl"
}

export const EightExtraLargeSize = Template.bind({})
EightExtraLargeSize.args = {
  size: "8xl"
}

export const NineExtraLargeSize = Template.bind({})
NineExtraLargeSize.args = {
  size: "9xl"
}

// Italics
export const Italics = Template.bind({})
Italics.args = {
  italics: true
}

// Underline
export const Underline = Template.bind({})
Underline.args = {
  underline: true
}

// Line through
export const LineThrough = Template.bind({})
LineThrough.args = {
  lineThrough: true
}

// Weight
export const ThinWeight = Template.bind({})
ThinWeight.args = {
  weight: "thin"
}

export const ExtraLightWeight = Template.bind({})
ExtraLightWeight.args = {
  weight: "extralight"
}

export const LightWeight = Template.bind({})
LightWeight.args = {
  weight: "light"
}

export const NormalWeight = Template.bind({})
NormalWeight.args = {
  weight: "normal"
}

export const SemiBoldWeight = Template.bind({})
SemiBoldWeight.args = {
  weight: "semibold"
}

export const BoldWeight = Template.bind({})
BoldWeight.args = {
  weight: "bold"
}

export const ExtraBoldWeight = Template.bind({})
ExtraBoldWeight.args = {
  weight: "extrabold"
}

export const BlackWeight = Template.bind({})
BlackWeight.args = {
  weight: "black"
}

// Align
export const LeftAlign = Template.bind({})
LeftAlign.args = {
  align: "left",
  fullWidth: true
}

export const CenterAlign = Template.bind({})
CenterAlign.args = {
  align: "center",
  fullWidth: true
}

export const RightAlign = Template.bind({})
RightAlign.args = {
  align: "right",
  fullWidth: true
}

export const JustifyAlign = Template.bind({})
JustifyAlign.args = {
  align: "justify",
  fullWidth: true
}

// Transform
export const UppercaseTransform = Template.bind({})
UppercaseTransform.args = {
  transform: "uppercase"
}

export const LowercaseTransform = Template.bind({})
LowercaseTransform.args = {
  transform: "lowercase"
}

export const CapitalizeTransform = Template.bind({})
CapitalizeTransform.args = {
  transform: "capitalize"
}

export const NormalTransform = Template.bind({})
NormalTransform.args = {
  transform: "normal"
}

// Overflow
export const TruncateOverflow = Template.bind({})
TruncateOverflow.args = {
  overflow: "truncate"
}

export const EllipsisOverflow = Template.bind({})
EllipsisOverflow.args = {
  overflow: "ellipsis"
}

export const ClipOverflow = Template.bind({})
ClipOverflow.args = {
  overflow: "clip"
}
