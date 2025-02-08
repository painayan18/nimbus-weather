import { Link } from "lucide-react";
import { useTheme } from "@/context/theme-provider.tsx";
import CitySearch from "@/components/city-search.tsx";
import { ThemeToggle } from "@/components/theme-toggle.tsx";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo-dark.png" : "logo-light.png"}
            alt="Nimbus logo"
            className="h-14"
          />
        </Link>

        <div className="flex gap-4">
          {/*    Search */}
          <CitySearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
