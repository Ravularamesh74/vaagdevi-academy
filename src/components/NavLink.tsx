import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  icon?: React.ReactNode;
  variant?: "default" | "pill" | "underline";
}

const baseStyles =
  "relative inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300";

const variants = {
  default: "text-gray-300 hover:text-white",
  pill:
    "px-4 py-2 rounded-full bg-white/5 hover:bg-yellow-400 hover:text-black",
  underline:
    "text-gray-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full",
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName = "text-yellow-400 after:w-full",
      pendingClassName = "opacity-50",
      icon,
      variant = "default",
      to,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        aria-current="page"
        className={({ isActive, isPending }) =>
          cn(
            baseStyles,
            variants[variant],
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      >
        {(navData) => (
          <>
            {icon && <span className="opacity-80">{icon}</span>}
            {typeof children === "function" ? children(navData) : children}
          </>
        )}
      </RouterNavLink>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };