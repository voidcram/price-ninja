import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Home = () => {
  return (
    <main className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-20 lg:pb-20">
      <h1 className="text-center text-3xl font-bold tracking-tighter md:text-6xl lg:leading-[1.5]">
        Your Ultimate Bargain Hunter
      </h1>
      <span className="text-center text-lg text-muted-foreground sm:text-xl">
        Find the Best Deals Online and Save Big with Price Ninja
      </span>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Button asChild>
          <Link href="/categories">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://github.com/marcosbd23/price-ninja" target="_blank">
            <GitHubLogoIcon className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default Home;
