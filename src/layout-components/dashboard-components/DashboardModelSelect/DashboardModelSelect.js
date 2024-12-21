// import React from 'react';
// import { Input } from '@mantine/core';
// import downarrowIcon from "./../../../assets/icons/down arrow.png";

// const DashboardModelSelect = ({ onChange }) => {
//   const models = [
//     { value: '1', label: 'All Models' },
//     { value: '2', label: 'Adventure' },
//     { value: '3', label: 'GT' },
//   ];

//   const handleModelChange = (event) => {
//     onChange(event);
//   };

//   return (
//     <Input
//       variant="transparent"
//       component="select"
//       size='20px'
//       style={{ paddingLeft: '10px' }}
//       leftSection={<img src={downarrowIcon} alt="Down Arrow" />}
//       onChange={handleModelChange}
//     >
//       {models.map((model) => (
//         <option key={model.value} value={model.value}>
//           {model.label}
//         </option>
//       ))}
//     </Input>
//   );
// };

// export default DashboardModelSelect;
// DashboardModelSelect.js
import React from 'react';
import { Input } from '@mantine/core';
import downarrowIcon from "./../../../assets/icons/down arrow.png";

const DashboardModelSelect = ({ onChange }) => {
  const models = [
    { value: 'AllModels', label: 'All Models' },
    { value: 'GT', label: 'GT' },
    { value: 'Adventure', label: 'Adventure' },
  ];

  const handleModelChange = (event) => {
    const newSelectedModel = event.target.value;
    onChange(newSelectedModel); // Pass the selected model value
  };

  return (
    <Input
      variant="transparent"
      component="select"
      size='20px'
      style={{ paddingLeft: '10px' }}
      leftSection={<img src={downarrowIcon} alt="Down Arrow" />}
      onChange={handleModelChange}
    >
      {models.map((model) => (
        <option key={model.value} value={model.value}>
          {model.label}
        </option>
      ))}
    </Input>
  );
};

export default DashboardModelSelect;
