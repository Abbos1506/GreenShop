import BlogPosts from "./companents/BlogPosts";
import HomeCardComp from "./companents/HomeCardComp";
import HomeHeaderComp from "./companents/HomeHeaderComp";
import HomeProducts from "./companents/HomeProducts";

const HomePage = () => {
  return (
    <div className="home__page container">
      <HomeHeaderComp />
      <HomeProducts />
      <HomeCardComp />
      <BlogPosts />
    </div>
  );
};

export default HomePage;
