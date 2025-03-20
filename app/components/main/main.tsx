'use client';

import React from 'react';
import classes from './main.module.css';
import Image, { StaticImageData } from 'next/image';

import clsx from 'clsx';
import { isLegacyDevice } from '@/app/utils/isLegacyDevice/isLegacyDevice';
import { Philosopher } from '@/app/fonts/fonts';

interface IProps {
  // Сделаны гибкие данные фото чтобы переиспользовать блок
  image: StaticImageData;
  imageAlt: string;
  isMain?: boolean;
}

const Main = ({ image, imageAlt }: IProps) => {

  return (
    <main
      className={clsx(classes.main, isLegacyDevice && classes.legacy)}
      id="main"
    >

      <div className={classes.logoContainer}>
        <div className={classes.logoWrapper}>
          <h1 className={clsx(classes.title, Philosopher.className)}>
            Велиж
          </h1>
          <h6 className={clsx(classes.description, Philosopher.className)}>
            база&nbsp;отдыха
          </h6>
        </div>
      </div>

      <div className={classes.mask}>
        <Image
          className={classes.image}
          placeholder="blur"
          sizes='(max-width: 768px) 300vw, 100vw'
          src={image}
          alt={imageAlt}
          quality={85}
          priority
        />
      </div>
    </main>
  );
};

export default Main;
