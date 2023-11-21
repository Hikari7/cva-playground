import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';

const buttonVariants = cva(
  'items-center text-black transition-all duration-200',
  {
    variants: {
      intent: {
        default:
          'rounded-md bg-primary hover:bg-primary-action',
        outline:
          'rounded-md border border-primary text-primary hover:bg-primary/80 hover:text-white',
        secondary:
          'rounded-md bg-secondary hover:bg-secondary-action',
        rounded:
          'rounded-full bg-primary hover:bg-primary-action',
        link: 'rounded-md text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 text-sm font-medium',
        xs: 'h-6 px-2 text-xs font-light',
        sm: 'h-8  px-3 text-sm',
        lg: 'h-12  px-6 font-medium',
        xl: 'h-14  px-8 font-medium',
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <button
        type='button'
        className={cx(buttonVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
