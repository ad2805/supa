// import { Carousel } from "@mantine/carousel";
// import { Image, Modal } from "@mantine/core";
// import React, { useState } from "react";

// const images = [
//   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D",
//   "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",
// ];

// export default function SearchBikeImageViewer({vehicle}) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const slides = images.map((url) => (
//     <Carousel.Slide key={url}>
//       <Image
//         src={url}
//         h="100%"
//         onClick={() => setSelectedImage(url)}
//         style={{ cursor: "pointer" }}
//       />
//     </Carousel.Slide>
//   ));

//   return (
//     <>
//       <Carousel height={200} withIndicators loop>
//         {slides}
//       </Carousel>
//       <Modal
//         opened={!!selectedImage}
//         onClose={() => setSelectedImage(null)}
//         title="Full Image"
//         size="lg"
//       >
//         <div style={{ textAlign: "center" }}>
//           <Image src={selectedImage} />
//         </div>
//       </Modal>
//     </>
//   );
// }

// import { Carousel } from "@mantine/carousel";
// import { Image, Modal } from "@mantine/core";
// import React, { useState } from "react";

// export default function SearchBikeImageViewer({ vehicle }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Use vehicle.images instead of the static images array
//   const slides = vehicle.documents.map((url, index) => (
//     <Carousel.Slide key={index}>
//       <Image
//         src={url}
//         h="100%"
//         onClick={() => setSelectedImage(url)}
//         style={{ cursor: "pointer" }}
//       />
//     </Carousel.Slide>
//   ));

//   return (
//     <>
//       <Carousel height={200} withIndicators loop>
//         {slides}
//       </Carousel>
//       <Modal
//         opened={!!selectedImage}
//         onClose={() => setSelectedImage(null)}
//         title="Full Image"
//         size="lg"
//       >
//         <div style={{ textAlign: "center" }}>
//           <Image src={selectedImage} />
//         </div>
//       </Modal>
//     </>
//   );
// }

import { Carousel } from "@mantine/carousel";
import { AspectRatio, Image, Modal,  Group } from "@mantine/core";
import React, { useState } from "react";

export default function BikeListImageViewer({ vehicle }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!vehicle) {
    return null; // Return null if vehicle is null or undefined
  }

  const slides = vehicle.documents.map((url, index) => (
    <Carousel.Slide key={index}>
      {/* <Box
        style={{ height: "300px" }}
        h="100%"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      > */}
      <Group justify="center" >
        <AspectRatio  h='300px' w='100%'>
          <img
            src={url}
            onClick={() => setSelectedImage(url)}
            style={{
              cursor: "pointer",

              objectFit: "contain",
            }}
          />
        </AspectRatio>
      </Group>

      {/* </Box> */}
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel height={300} withIndicators loop align="center">
        {slides}
      </Carousel>
      <Modal
        opened={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title="Full Image"
        size="md"
      >
        <div style={{ textAlign: "center" }}>
          <Image src={selectedImage} />
        </div>
      </Modal>
    </>
  );
}
