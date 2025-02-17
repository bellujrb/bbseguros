"use client";

import {useScrollTop} from "@/hooks/use-scroll-top";
import {Lock} from "lucide-react";
import {cn} from "@/lib/utils";
import {Logo} from "./ui/logo";
import {Button} from "@/components/ui/button";
import {MegaNavigation} from "./mega-navigation";
import {UserBox} from "@/components/user-box"
import {TransitionLink} from "@/components/ui/transition-link";
import {NavigationMobile} from "./navigation-mobile";
import {useUser} from "@clerk/nextjs";

export const Navbar = () => {
    const scrolled = useScrollTop();
    const {user} = useUser();
    return (
        <div
            className={cn(
                "z-50 bg-background fixed top-0 flex items-center justify-between p-4 w-full",
                scrolled && "border-b shadow-sm"
            )}
        >
            <Logo/>
            <div className="flex items-center justify-between w-full md:w-auto">
                <MegaNavigation className="hidden md:flex mr-2"/>
                <div className="flex items-center justify-around gap-x-2 md:gap-x-4 w-full">
                    <NavigationMobile/>
                    <div>
                        <UserBox/>
                    </div>
                </div>
            </div>
        </div>
    );
};


