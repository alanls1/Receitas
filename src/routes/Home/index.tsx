import React from "react";
import "./styles.scss";
import Header from "../../components/Header";
import BannerCard from "../../components/BannerCard";
import SectionTab from "../../components/SectionTab";
import SliderSection from "../../components/SliderSection";
import SectionTag from "../../components/SectionTag";

export default () => {
  return (
    <main>
      <Header />
      <article>
        <BannerCard />
        <SectionTab />
        <SliderSection />
        <SectionTag />
      </article>
    </main>
  );
};
