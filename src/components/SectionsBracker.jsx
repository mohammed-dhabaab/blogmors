import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const SectionsBracker = ({ size, rotation, className, ...props }) => {
  return (
    <div
      className={twMerge(sectionBrackerVariants({ size, rotation }), className)}
      {...props}
    ></div>
  );
};

const sectionBrackerVariants = cva(
  "bg-white h-[6px] w-full rounded-full opacity-50",
  {
    variants: {
      size: {
        sm: ["my-6"],
        md: ["my-8"],
        lg: ["my-10"],
      },
      rotation: {
        horizontal: ["rotate-0"],
        vertical: ["rotate-90"],
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "md",
      rotation: "horizontal",
    },
  },
);

export default SectionsBracker;
