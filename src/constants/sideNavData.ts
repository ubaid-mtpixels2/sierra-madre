import dashboardIcon from "../assets/sidenav-icons/dashboard.svg";
import homeIcon from "../assets/sidenav-icons/home.svg";
import aiHandledTicketsIcon from "../assets/sidenav-icons/ai-handled-tickets.svg";
import ticketsIcon from "../assets/sidenav-icons/tickets.svg";

export const menuItems = [
    { label: 'Home', icon: homeIcon, path: '/home' },
    { label: 'Tickets', icon: ticketsIcon, path: '/tickets' },
    { label: 'User Profile', icon: dashboardIcon, path: '/user-profile' },
    { label: 'Dashboard', icon: dashboardIcon, path: '/dashboard' },
    { label: 'AI Handled Tickets', icon: aiHandledTicketsIcon, path: '/ai-handled-tickets' },
    // { label: 'Add User', icon: aiHandledTicketsIcon, path: '/ai-handled-tickets' },
  ];