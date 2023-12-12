import HomePage from "../pages/home";
import BlogsPage from "../pages/blogs";
import PlantsPage from "../pages/plants";
import ShopPage from "../pages/shop";

const RouterData = [
  {
    id: 1,
    path: "/",
    companent: <HomePage />,
  },
  {
    id: 2,
    path: "/shop",
    companent: <ShopPage />,
  },
  {
    id: 3,
    path: "/plant",
    companent: <PlantsPage />,
  },
  {
    id: 4,
    path: "/blogs",
    companent: <BlogsPage />,
  },
];

export default RouterData;
