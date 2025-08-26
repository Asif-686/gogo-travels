export function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 shadow-md">
        <div className="text-2xl font-bold">BrandName</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }