"use client";

import React, { useRef, useState } from "react";
import classes from "./comfort-item.module.css";
import Image, { StaticImageData } from "next/image";
import useScaleAnimation from "@/app/utils/animation/useScaleAnimation";
import clsx from "clsx";
import { Philosopher } from "@/app/fonts/fonts";

interface IProps {
  type: string;
  title: string | React.ReactNode;
  image: {
    src: StaticImageData;
    alt: string;
  };
  icon: React.ReactNode;
}

const ComfortItem = ({ title, image, icon, type }: IProps) => {
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Анимация
  useScaleAnimation(imageRef, 1.2, isImageLoaded);

  return (
    <a className={classes.item} href={`/comfort/${type}`}>
      <div className={classes.icon}>{icon}</div>
      <h3 className={clsx(classes.title, Philosopher.className)}>{title}</h3>
      <Image
        ref={imageRef}
        onLoad={() => setIsImageLoaded(true)}
        className={classes.image}
        placeholder="blur"
        sizes="(max-width: 1024px) 80vw, 33vw"
        src={image.src}
        alt={image.alt}
      />
    </a>
  );
};

export default ComfortItem;
