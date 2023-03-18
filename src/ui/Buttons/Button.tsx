import { cva, VariantProps } from "class-variance-authority"

const buttonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "px-4",
    "py-2",
    "rounded-lg",
    "font-medium",
    "cursor-pointer",
    "transition-colors"
  ],
  {
    variants: {
      intent: {
        primary: ["text-columbia-700", "bg-ecru-500", "hover:bg-ecru-700"],
        secondary: [
          "text-columbia-700",
          "bg-cerulean-500",
          "hover:bg-cerulean-700"
        ],
        tertiary: [
          "text-gunmetal-500",
          "bg-columbia-500",
          "hover:bg-columbia-600"
        ],
        danger: ["text-columbia-700", "bg-danger", "hover:bg-danger-light"],
        success: ["text-columbia-700", "bg-success", "hover:bg-success-light"],
        link: [
          "!inline",
          "!px-0",
          "!py-0",
          "!rounded-none",
          "!font-base",
          "underline",
          "font-bold",
          "text-ecru-500",
          "hover:text-ecru-700"
        ]
      },
      fullWidth: {
        true: ["w-full"]
      },
      outline: {
        true: ["bg-transparent", "border-2", "hover:bg-transparent"]
      }
    },
    defaultVariants: {
      intent: "primary"
    },
    compoundVariants: [
      {
        intent: "primary",
        outline: true,
        class: [
          "text-ecru-500",
          "border-ecru-500",
          "hover:text-ecru-700",
          "hover:border-ecru-700"
        ]
      },
      {
        intent: "secondary",
        outline: true,
        class: [
          "!text-cerulean-500",
          "border-cerulean-500",
          "hover:!text-cerulean-700",
          "hover:border-cerulean-700"
        ]
      },
      {
        intent: "tertiary",
        outline: true,
        class: [
          "!text-columbia-500",
          "border-columbia-500",
          "hover:!text-columbia-600",
          "hover:border-columbia-600"
        ]
      },
      {
        intent: "danger",
        outline: true,
        class: [
          "!text-danger",
          "border-danger",
          "hover:!text-danger-light",
          "hover:border-danger-light"
        ]
      },
      {
        intent: "success",
        outline: true,
        class: [
          "text-success",
          "border-success",
          "hover:text-success-light",
          "hover:border-success-light"
        ]
      },
      {
        intent: "link",
        outline: true,
        class: ["!border-0"]
      },
      {
        intent: "link",
        fullWidth: true,
        class: ["!w-auto"]
      }
    ]
  }
)

interface LinkProps
  extends VariantProps<typeof buttonStyles>,
    Omit<ButtonProps, "onClick"> {
  href: string
}

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children?: React.ReactNode
  onClick: () => any
}

type Props = ButtonProps | LinkProps

export function Button(props: Props) {
  if ("href" in props) {
    // Link
    return (
      <a className={buttonStyles(props)} href={props.href}>
        {props.children}
      </a>
    )
  } else {
    // Button
    return (
      <div className={buttonStyles(props)} onClick={props.onClick}>
        {props.children}
      </div>
    )
  }
}
