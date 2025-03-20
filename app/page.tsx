import AboutUs from "./components/about-us/about-us";
import Camping from "./components/comfort/comfort";
import Houses from "./components/houses/houses";
import Main from "./components/main/main";
import PhotoGallery from "./components/photo-gallery/photo-gallery";
import Contacts from "./components/contacts/contacts";

import { data } from "@/data/data";
import Separator from "./components/separator/separator";
import AnchorScrollLogic from "./utils/anchor-scroll-logic/anchor-scroll-logic";
import MainIMG from '@/public/images/main.jpg'

export default function Home() {
  return (
    <div className="wrapper">
      <Main imageAlt="Велиж" image={MainIMG} isMain />
      <Houses />
      <AboutUs />
      <PhotoGallery title={'Фотогалерея'} data={data.gallery} nameGallery="photoGallery" />
      <Camping />
      <Separator />
      <Contacts />

      {/* Логика прокрутки по якорной ссылке */}
      <AnchorScrollLogic />
    </div>
  );
}
