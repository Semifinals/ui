import { Text } from "./Text"

interface Props {
  children?: React.ReactNode
  className?: string
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  color?: "normal" | "inverse" | "faded" | "lessfaded"
}

export function Heading({ type, children, ...props }: Props) {
  switch (type) {
    case "h1":
      return (
        <Text type="h1" size="6xl" weight="extrabold" {...props}>
          {children}
        </Text>
      )
    case "h2":
      return (
        <Text type="h2" size="4xl" weight="extrabold" {...props}>
          {children}
        </Text>
      )
    case "h3":
      return (
        <Text type="h3" size="2xl" weight="bold" {...props}>
          {children}
        </Text>
      )
    case "h4":
      return (
        <Text type="h4" size="xl" weight="bold" {...props}>
          {children}
        </Text>
      )
    case "h5":
      return (
        <Text type="h5" size="lg" weight="semibold" {...props}>
          {children}
        </Text>
      )
    case "h6":
      return (
        <Text type="h6" size="base" weight="semibold" {...props}>
          {children}
        </Text>
      )
  }
}
