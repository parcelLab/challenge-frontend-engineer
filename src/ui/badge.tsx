import type * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({
	className,
	variant = "default",
	...props
}: BadgeProps) {
	const styles = {
		default: "bg-secondary text-secondary-foreground",
		secondary: "bg-muted text-muted-foreground",
		destructive: "bg-destructive text-destructive-foreground",
		outline: "border border-border",
	}[variant];
	return (
		<div
			className={cn(
				"inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold",
				styles,
				className,
			)}
			{...props}
		/>
	);
}
