import { Button } from "antd";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkle } from "lucide-react";
import { useSidebar } from "./ui/sidebar";

export function SidebarOptInForm() {
  const { state } = useSidebar();
  return (
    <Card className={`shadow-none ${state === "expanded" ? "" : "hidden"}`}>
      <form>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm flex items-center justify-center gap-2">
            <Sparkle className="h-4 w-4" />
            Upgrade to Pro
          </CardTitle>
          {/* <CardDescription>
            Unlock premium features and enhance your experience with Pro.
          </CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <Button type="primary" className="w-full text-sm shadow-none">
            Subscribe
          </Button>
        </CardContent>
      </form>
    </Card>
  );
}
