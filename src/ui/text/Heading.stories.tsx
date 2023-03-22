import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Heading } from "./Heading"
import { Text } from "./Text"

export default {
  title: "UI/text/Heading",
  component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = args => (
  <>
    <Heading {...args}>Lorem ipsum dolor sit amet</Heading>
    <Text type="p">
      Consectetur adipiscing elit. Nullam nibh nisi, faucibus sit amet efficitur
      et, fringilla vel magna. Phasellus at nunc odio. Praesent eu arcu finibus,
      maximus est sit amet, egestas turpis. Donec facilisis turpis non nunc
      aliquet ultrices non sed mauris. Etiam fringilla id velit et tincidunt.
      Integer fringilla gravida venenatis. Interdum et malesuada fames ac ante
      ipsum primis in faucibus. Vivamus ac elementum nisi, id condimentum arcu.
    </Text>
  </>
)

// Titles
export const h1 = Template.bind({})
h1.args = {
  type: "h1"
}

export const h2 = Template.bind({})
h2.args = {
  type: "h2"
}

export const h3 = Template.bind({})
h3.args = {
  type: "h3"
}

export const h4 = Template.bind({})
h4.args = {
  type: "h4"
}

export const h5 = Template.bind({})
h5.args = {
  type: "h5"
}

export const h6 = Template.bind({})
h6.args = {
  type: "h6"
}
