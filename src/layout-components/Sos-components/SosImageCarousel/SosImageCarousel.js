

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",
];

export default function SosImageCarousel() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} h="100%" />
    </Carousel.Slide>
  ));

  return (
    <Carousel height={200} withIndicators loop>
      {slides}
    </Carousel>
  ); 
}
