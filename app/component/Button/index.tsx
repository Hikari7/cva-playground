import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import cn from 'classnames';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary hover:bg-primary/80',
        outline:
          'border border-primary text-primary hover:bg-primary/80 hover:text-white',
        secondary:
          'bg-secondary hover:bg-secondary/80',
        rounded:
          'rounded-full bg-primary hover:bg-primary/80',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4',
        xs: 'h-6 px-2 text-xs font-light',
        sm: 'h-8 rounded-md px-3 text-sm',
        lg: 'h-12 rounded-md px-6 font-medium',
        xl: 'h-14 rounded-md px-8 font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
