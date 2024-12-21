// import { Image, Modal } from "@mantine/core";
// import React, { useState } from "react";

// export default function SupportImageViewer({ complaint }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!complaint || !complaint.imageUrl) {
//     return null; // Return null if complaint is null, undefined, or imageUrl is not present
//   }

//   return (
//     <>
//       <Image
//         src={complaint.imageUrl}
//         onClick={() => setSelectedImage(complaint.imageUrl)}
//         style={{ cursor: "pointer", maxWidth: "100%" }}
//       />
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


// import { Image, Modal } from "@mantine/core";
// import React, { useState } from "react";

// export default function SupportImageViewer({ complaint }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!complaint || !complaint.imageUrl) {
//     return null; // Return null if complaint is null, undefined, or imageUrl is not present
//   }

//   return (
//     <>
//       <Image
//         src={complaint.imageUrl}
//         onClick={() => setSelectedImage(complaint.imageUrl)}
//         style={{ cursor: "pointer", maxWidth: "100%" }}
//       />
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

// export default function SupportImageViewer({ complaint }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!complaint) {
//     return null; // Return null if complaint is null or undefined
//   }

//   const slides = complaint.screenshot.map((url, index) => (
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
//       <Carousel height={230} withIndicators loop>
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

export default function SupportImageViewer({ complaint }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!complaint) {
    return null; // Return null if vehicle is null or undefined
  }

  const slides = complaint.screenshot.map((url, index) => (
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
