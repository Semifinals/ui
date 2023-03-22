import { cva, VariantProps } from "class-variance-authority"

const textStyles = cva([], {
  variants: {
    color: {
      normal: "text-black",
      inverse: "text-white",
      faded: "text-faded",
      lessfaded: "text-less-faded"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    },
    italics: {
      true: "italic"
    },
    underline: {
      true: "underline"
    },
    lineThrough: {
      true: "line-through"
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify"
    },
    transform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      normal: "normal-case"
    },
    overflow: {
      truncate: "truncate",
      ellipsis: "text-ellipsis",
      clip: "text-clip"
    }
  },
  defaultVariants: {
    color: "normal",
    size: "base",
    italics: null,
    lineThrough: null,
    weight: "normal",
    align: "left",
    transform: "normal",
    overflow: "clip"
  }
})

interface Props extends VariantProps<typeof textStyles> {
  children?: React.ReactNode
  fullWidth?: boolean
}

export function Text(props: Props) {
  if (props.fullWidth)
    return <p className={textStyles(props)}>{props.children}</p>
  else return <span className={textStyles(props)}>{props.children}</span>
}
