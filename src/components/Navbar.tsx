import CartIcon from "@/components/CartIcon"
import ToggleTheme from "@/components/ToggleTheme"

const Navbar = () => {
  return (
    <nav className="bg-primary pl-12 pr-25 py-4 flex items-center justify-between">
        <h1 className="text-primary-foreground text-4xl font-semibold cursor-pointer">Cart</h1>

        {/* Action container */}
        <div className="flex items-center gap-16">
            {/* Theme Toggle */}
            <ToggleTheme />

            {/* Cart Icon with Count */}
            <CartIcon />
        </div>
    </nav>
  )
}

export default Navbar