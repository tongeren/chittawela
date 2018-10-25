import Home from '../components/pages/Home/Home';
import Explore from '../components/pages/Explore/Explore';
import Guide from '../components/pages/Guide/Guide';
import Sanctuary from '../components/pages/Sanctuary/Sanctuary';
import AboutUs from '../components/pages/AboutUs/AboutUs';
import Contact from '../components/pages/Contact/Contact'; 

// Route configuration & navigation
export const ROUTES = [
    {
        path: "/",
        component: Home,
        navText: "Home"
    },
    {
        path: "/explore",
        component: Explore,
        navText: "Explore"
    },
    {
        path: "/guide",
        component: Guide,
        navText: "Your Guide"
    },
    {
        path: "/sanctuary",
        component: Sanctuary,
        navText: "Your Sanctuary"
    },
    {
        path: "/about",
        component: AboutUs,
        navText: "Chittawela"
    },
    {
        path: "/contact",
        component: Contact,
        navText: "Contact Us"
    }
];

const NO_OF_ROUTES = ROUTES.length;

export const nextPage = (currentPath) => {
    const matchPath = (ele) => (
        ele.path === currentPath 
    );

    var index = ROUTES.findIndex(matchPath);
   
    var offset = -index; // if at the end then go back to home 
    if (index < NO_OF_ROUTES - 1) {
        offset = 1
    }
        
    return ROUTES[index + offset].path;
}

