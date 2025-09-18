import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<
	HTMLLabelElement,
	React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
	// biome-ignore lint/a11y/noLabelWithoutControl: composable component
	<label
		ref={ref}
		className={cn("text-sm font-medium leading-none", className)}
		{...props}
	/>
));
Label.displayName = "Label";

export { Label };
