import * as React from "react"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonCtaProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
}

function ButtonCta({ label = "Get Access", className, ...props }: ButtonCtaProps) {
    return (
        <Button
            variant="ghost"
            className={cn(
                "group relative w-auto h-12 px-8 rounded-full overflow-hidden transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-primary via-accent to-primary">
                <div className="absolute inset-0 bg-card rounded-full" />
            </div>

            {/* Main background with subtle gradient */}
            <div className="absolute inset-[1.5px] bg-card rounded-full" />
            <div className="absolute inset-[1.5px] bg-gradient-to-br from-card via-card to-primary/5 rounded-full" />

            {/* Subtle glow */}
            <div className="absolute inset-[1.5px] shadow-[inset_0_0_20px_hsl(270_91%_65%_/_0.1)] rounded-full" />

            {/* Text */}
            <div className="relative flex items-center justify-center gap-2 z-10">
                <span className="text-base font-medium text-primary drop-shadow-[0_0_8px_hsl(270_91%_65%_/_0.3)]">
                    {label}
                </span>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-[1.5px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 group-hover:opacity-100 rounded-full" />
        </Button>
    );
}

export { ButtonCta }