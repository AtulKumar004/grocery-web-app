import React, { lazy } from "react";
import Carousal from "../../../components/common/Hero/Carousal";
import AddBanner from "../../../components/Grocery/Bannners/BannerCard";
import bannerImg1 from "../../../images/ad-banner-1.jpg"; // Regular import for images
import bannerImg2 from "../../../images/ad-banner-2.jpg";
import bannerImg3 from "../../../images/ad-banner-3.jpg";
import Banner from "../../../components/Grocery/Bannners/banner";

function Home() {
  const bannerData = [
    {
      id: 1,
      heading: `10% cashback on
personal care`,
      description: "Max cashback: $12",
      code: "CARE12",
      bannerImg: bannerImg1,
    },
    {
      id: 2,
      heading: `Say yes to
season’s fresh`,
      description: `Refresh your day
the fruity way`,

      bannerImg: bannerImg2,
    },
    {
      id: 3,
      heading: `When in doubt,
eat ice cream`,
      description: `Enjoy a scoop of
summer today`,

      bannerImg: bannerImg3,
    },
  ];
  return (
    <div className=" xl:py-8 flex flex-col gap-4">
      <Carousal />
      <saction className="w-full my-4">
        <Banner />
      </saction>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {bannerData.map((banner) => {
          return (
            <div className="col-span-1 h-64 " key={banner?.id}>
              <AddBanner
                bannerImg={banner?.bannerImg}
                code={banner?.code}
                heading={banner?.heading}
                description={banner?.description}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
