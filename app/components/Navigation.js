import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Download, Bell, User, Search } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const menuItems = [
    { 
      name: 'Features', 
      submenu: ['Savings', 'Investments', 'Budgeting', 'Group Plans'] 
    },
    { 
      name: 'How it Works',
      submenu: ['Getting Started', 'Technology', 'Security', 'FAQs']
    },
    { 
      name: 'Group Savings',
      submenu: ['Create Group', 'Join Group', 'Success Stories', 'Templates']
    },
    { 
      name: 'Community',
      submenu: ['Forum', 'Events', 'Blog', 'Support']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than 50px to add background effects
      setIsScrolled(window.scrollY > 50);

      // Handle active section detection
      const sections = menuItems.map(item => 
        document.getElementById(item.name.toLowerCase().replace(/\s+/g, '-'))
      );
      
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveItem(menuItems[index].name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown menus if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchOpen || notificationsOpen || userMenuOpen) {
        if (!event.target.closest('.user-menu') && 
            !event.target.closest('.search-container') && 
            !event.target.closest('.notifications-menu')) {
          setSearchOpen(false);
          setNotificationsOpen(false);
          setUserMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen, notificationsOpen, userMenuOpen]);

  // Mock notifications data
  const notifications = [
    { id: 1, text: "Your savings goal is 85% complete!", time: "2m ago", isNew: true },
    { id: 2, text: "New group saving opportunity available", time: "1h ago", isNew: true },
    { id: 3, text: "Weekly financial report is ready", time: "5h ago", isNew: false }
  ];

  const SubmenuItem = ({ name, isActive }) => (
    <a
      href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
      className={`block px-4 py-2 text-sm hover:bg-green-50 transition-colors duration-200 rounded-md ${
        isActive ? 'text-green-600 font-medium' : 'text-gray-600'
      }`}
    >
      {name}
    </a>
  );

  const DropdownMenu = ({ item }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    return (
      <div 
        className="relative group"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <a
          href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
          className={`flex items-center px-1 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200 relative group ${
            activeItem === item.name ? 'text-green-600 font-medium' : ''
          }`}
        >
          <span>{item.name}</span>
          <ChevronDown 
            className={`ml-1 h-4 w-4 transition-transform duration-300 ${
              dropdownOpen ? 'rotate-180' : ''
            }`} 
          />
          
          <span 
            className={`absolute left-0 -bottom-0.5 h-0.5 bg-green-500 transition-all duration-300 ${
              activeItem === item.name ? 'w-full' : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </a>
        
        {dropdownOpen && (
          <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50 transform origin-top-left transition-all duration-200 opacity-100 scale-100">
            <div className="py-1">
              {item.submenu.map(subItem => (
                <SubmenuItem 
                  key={subItem} 
                  name={subItem} 
                  isActive={false} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-1' 
        : 'bg-white/80 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Gowallet
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <DropdownMenu key={item.name} item={item} />
            ))}
          </div>
          
          {/* Desktop Right Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative search-container">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-3 ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-500">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full py-2 px-3 border-none focus:outline-none"
                      autoFocus
                    />
                    <button className="px-3 py-2 bg-green-500 text-white">
                      <Search className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Notifications */}
            <div className="relative notifications-menu">
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-black ring-opacity-5">
                  <div className="p-3 bg-green-50 border-b border-gray-200">
                    <h3 className="font-medium text-green-800">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                          notification.isNew ? 'bg-green-50/50' : ''
                        }`}
                      >
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-800">{notification.text}</p>
                          {notification.isNew && (
                            <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 bg-gray-50 text-center">
                    <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                      See all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* User Menu */}
            <div className="relative user-menu">
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-medium text-sm">
                  JD
                </div>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  userMenuOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-black ring-opacity-5">
                  <div className="py-2">
                    <a href="#profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </a>
                    <a href="#settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </a>
                    <a href="#logout" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300 flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
            {/* Mobile search */}
            <div className="px-3 py-2">
              <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-500">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-3 border-none focus:outline-none"
                />
                <button className="px-3 py-2 bg-green-500 text-white">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Mobile menu items */}
            {menuItems.map((item) => (
              <div key={item.name} className="py-1">
                <a
                  href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    activeItem === item.name
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                  }`}
                >
                  {item.name}
                </a>
                <div className="ml-4 border-l border-gray-200 pl-2">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem}
                      href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Mobile notifications preview */}
            <div className="px-3 py-2 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Notifications</h3>
              {notifications.slice(0, 2).map((notification) => (
                <div key={notification.id} className="mb-2 p-2 bg-gray-50 rounded">
                  <p className="text-sm">{notification.text}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
              <button className="text-sm text-green-600 font-medium mt-1">
                See all
              </button>
            </div>
            
            {/* Mobile profile section */}
            <div className="px-3 py-3 border-t border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-medium">
                    JD
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">John Doe</div>
                  <div className="text-sm font-medium text-gray-500">john@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <a href="#profile" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-md">
                  Profile
                </a>
                <a href="#settings" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 rounded-md">
                  Settings
                </a>
                <a href="#sign-out" className="block px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md">
                  Sign out
                </a>
              </div>
            </div>
            
            {/* Download app button - mobile */}
            <div className="px-5 py-4">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}