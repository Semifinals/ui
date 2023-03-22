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
      "4xl": "text-4xl leading-loose",
      "5xl": "text-5xl leading-loose",
      "6xl": "text-6xl leading-loose",
      "7xl": "text-7xl leading-loose",
      "8xl": "text-8xl leading-loose",
      "9xl": "text-9xl leading-loose"
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
  className?: string
  type?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Text({ className, ...props }: Props) {
  const classes = `${className} ${textStyles(props)}`

  switch (props.type ?? "span") {
    case "span":
      return <span className={classes}>{props.children}</span>
    case "p":
      return <p className={classes}>{props.children}</p>
    case "h1":
      return <h1 className={classes}>{props.children}</h1>
    case "h2":
      return <h2 className={classes}>{props.children}</h2>
    case "h3":
      return <h3 className={classes}>{props.children}</h3>
    case "h4":
      return <h4 className={classes}>{props.children}</h4>
    case "h5":
      return <h5 className={classes}>{props.children}</h5>
    case "h6":
      return <h6 className={classes}>{props.children}</h6>
  }
}
