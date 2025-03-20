'use client';
import React, { useEffect, useState } from 'react';
import BurgerMenu from './burger-menu/burger-menu';
import classes from './header.module.css';
import clsx from 'clsx';

import { useMobileContext } from '@/app/utils/adaptive/MobileContext';

const Header = () => {
  const { isMobile } = useMobileContext();
  const [scrollOnTop, setScrollOnTop] = useState(true);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollOnTop(true);
      } else {
        setScrollOnTop(false);
      }
    };

    if (typeof window !== 'undefined') {
      if (!isMobile) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile]);

  return (
    <header
      className={clsx(classes.header, classes.paddingCorrect)}
    >
      <BurgerMenu />
      <div className={classes.actions}>
        <a className={clsx('button', classes.button)} href="#">
          Забронировать
        </a>
      </div>
    </header>
  );
};

export default Header;
