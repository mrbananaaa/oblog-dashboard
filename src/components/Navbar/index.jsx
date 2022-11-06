import logo from "../../assets/logo/logo-small.png";
import moboLogo from "../../assets/logo/mobo-logo.png"
import NavItems from "./NavItems";
import { Home, Layout, Bell, Star, FileText, Menu, X } from "react-feather"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <img 
            src={logo} 
            width={120} 
            alt="logo"
          />
        </div>

        <div className="nav-items-wrapper">
          <NavItems 
            title="Home" 
            logo={<Home />}
            path="/" 
          />
          <NavItems 
            title="My Posts" 
            logo={<Layout />}
            path="/my-post" 
          />
          <NavItems 
            title="Notifications" 
            logo={<Bell />}
            path="/notifications" 
          />
          <NavItems 
            title="Favorites Posts" 
            logo={<Star />}
            path="/favorites-posts"
          />
          <NavItems 
            title="Create New Post" 
            logo={<FileText />}
            path="/create-new-post"
          />
        </div>
      </div>
    </div>
  );
};

const MoboNavbar = () => { 
  return (
    <div className="mobonav-container">
      <label className="mobonav-menu-wrapper">
        <input type="checkbox" className="peer hidden" />
        <Menu className="mobonav-menu-btn" />
        <X className="mobonav-x-btn" />

        {/* dark overlay */}
        <div className="mobonav-dark-overlay"/>
        
        {/* menu-container */}
        <div className="mobonav-menu-container">
          <div className="h-screen border-t w-4/5 pt-32 bg-light flex flex-col space-y-3 px-10">
            <NavItems 
              title="Home" 
              logo={<Home />}
              path="/" 
            />
            <NavItems 
            title="My Posts" 
            logo={<Layout />}
            path="/my-post" 
          />
          <NavItems 
            title="Notifications" 
            logo={<Bell />}
            path="/notifications" 
          />
          <NavItems 
            title="Favorites Posts" 
            logo={<Star />}
            path="/favorites-posts"
          />
          <NavItems 
            title="Create New Post" 
            logo={<FileText />}
            path="/create-new-post"
          />
          </div>
        </div>
        
      </label>

      <img src={moboLogo} width={71} alt="logo" />
    </div>
  )
}

export { Navbar, MoboNavbar };
