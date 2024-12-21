import React from "react";
import { Breadcrumbs } from "@mantine/core";
import "./Breadcrumb.style.css";
import { useLocation } from "react-router-dom";
// import rightIcon from '../../assets/icons/right.png';
// import { IconChevronRight } from '@tabler/icons-react';

export default function Breadcrumb() {
  // const items = [
  //   { title: 'Mantine', href: '#' },
  //   { title: 'Mantine hooks', href: '#' },
  //   { title: 'use-id', href: '#' }
  // ].map((item, index) => {
  //   return <Anchor href={item.href} key={index} className='breadcrumb-item'>
  //       {item.title}
  //   </Anchor>
  // })
  const route = useLocation();
  const itemsList = route.pathname
    .split("/")
    .filter((item, index) => index > 1 && index <=3)
    .map(item => decodeURIComponent(item.replace(/\+/g, ' ')));

  return (
    <>
      <Breadcrumbs
        className="breadcrumb"
        style={{
          textTransform: "capitalize",
          fontSize: "28px",
        }}
      >
        {itemsList}
      </Breadcrumbs>
    </>
  );
}
