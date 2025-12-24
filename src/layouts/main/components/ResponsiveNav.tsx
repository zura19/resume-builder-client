import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { NavbarItem } from "@/constants/navbar/navbar";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface props {
  navbarData: NavbarItem[];
  isUser: boolean;
  scrollIntoView: (elementId: string) => void;
}

export default function ResponsiveNav({
  scrollIntoView,
  navbarData,
  isUser,
}: props) {
  const [open, setOpen] = useState(false);

  function handleScroll(elementId: string) {
    setOpen(false);
    scrollIntoView(elementId);
  }

  return (
    <Dialog modal={true} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={"icon"}
          variant={"ghost"}
          className=" dark:hover:bg-accent/0 hover:text-muted-foreground focus:bg-none active:bg-none lg:hidden"
        >
          <MenuIcon
            className={cn(
              "size-7 transition-all duration-500",
              open ? "text-indigo-500" : "text-foreground"
            )}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background/75 backdrop-blur-lg  lg:hidden">
        <DialogHeader>
          <DialogTitle className="hidden"></DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>

        <ul className="lg:hidden flex flex-col items-center gap-2 w-full">
          {navbarData.map((item) =>
            item.type === "link" ? (
              <li
                key={item.label}
                className="font-semibold w-full flex items-center justify-center rounded-lg hover:text-indigo-500 hover:bg-muted/30 cursor-pointer transition-all duration-300"
              >
                <Link
                  to={item.to}
                  className=" w-full h-full flex items-center justify-center py-2 rounded-lg"
                >
                  {item.label}
                </Link>
              </li>
            ) : (
              <li
                key={item.label}
                className="font-semibold w-full flex items-center justify-center py-2 rounded-lg hover:text-indigo-500 hover:bg-muted/30 cursor-pointer transition-all duration-300"
                onClick={() => handleScroll(item.to)}
              >
                {item.label}
              </li>
            )
          )}

          {isUser && (
            <li
              key={"profile"}
              className="font-semibold w-full flex items-center justify-center rounded-lg hover:text-indigo-500 hover:bg-muted/30 cursor-pointer transition-all duration-300"
            >
              <Link
                to={"/profile"}
                className=" w-full h-full flex items-center justify-center py-2 rounded-lg"
              >
                Profile
              </Link>
            </li>
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
