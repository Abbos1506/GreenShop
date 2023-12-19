import ShopDescriptions from "./companents/ShopDescriptions";
import ShopHeader from "./companents/ShopHeader";
import ShopReleted from "./companents/ShopReleted";
import ShopTabs from "./companents/ShopTabs";

const ShopPage = () => {
  return (
    <div className="shop__page">
      <ShopHeader />
      <div className="shop__desc__tabs">
        <ShopTabs />
      </div>
      <ShopReleted/>
    </div>
  );
};

export default ShopPage;
