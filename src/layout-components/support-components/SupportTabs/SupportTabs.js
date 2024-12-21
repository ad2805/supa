// import React from "react";
// import { Button, Paper, Tabs } from "@mantine/core";
// import NewComplaints from "../NewComplaints/NewComplaints";
// import OngoingComplaints from "../OngoingComplaints/OngoingComplaints";
// import ResolvedCompalints from "../ResolvedCompalints/ResolvedCompalints";
// import { useLocation } from "react-router-dom";
// import SupportData from "./../../../data/Support-data/Support.json";

// export default function SupportTabs() {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const activeTab = params.get("tab") || "newcomplaints";
//   const ongoingComplaints = SupportData.filter(
//     (complaint) => complaint.status === "ongoing"
//   );
//   const newComplaints = SupportData.filter(
//     (complaint) => complaint.status === "newcomplaints"
//   );
//   const resolvedComplaints = SupportData.filter(
//     (complaint) => complaint.status === "resolved"
//   );
//   return (
//     <Paper bg="transparent">
//       <Tabs color="#182452" variant="pills" defaultValue={activeTab}>
//         <Tabs.List>
//           <Tabs.Tab value="newcomplaints" style={{ fontSize: "20px" }}>
//             New Complaints
//           </Tabs.Tab>
//           <Tabs.Tab value="ongoing" style={{ fontSize: "20px" }}>
//             On Going
//           </Tabs.Tab>
//           <Tabs.Tab value="resolved" style={{ fontSize: "20px" }}>
//             Resolved
//           </Tabs.Tab>
//         </Tabs.List>

//         <Tabs.Panel value="newcomplaints" mb="md">
//           <NewComplaints newComplaints={newComplaints} />
//         </Tabs.Panel>

//         <Tabs.Panel value="ongoing">
//           <OngoingComplaints ongoingComplaints={ongoingComplaints} />
//         </Tabs.Panel>

//         <Tabs.Panel value="resolved">
//           <ResolvedCompalints resolvedComplaints={resolvedComplaints}/>
//         </Tabs.Panel>
//       </Tabs>
//     </Paper>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Button, Paper, Tabs } from "@mantine/core";
// import NewComplaints from "../NewComplaints/NewComplaints";
// import OngoingComplaints from "../OngoingComplaints/OngoingComplaints";
// import ResolvedCompalints from "../ResolvedCompalints/ResolvedCompalints";
// import { useLocation } from "react-router-dom";
// import SupportData from "./../../../data/Support-data/Support.json";

// export default function SupportTabs() {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const activeTab = params.get("tab") || "newcomplaints";
//   const ongoingComplaints = SupportData.filter(
//     (complaint) => complaint.status === "ongoing"
//   );
//   const newComplaints = SupportData.filter(
//     (complaint) => complaint.status === "newcomplaints"
//   );
//   const resolvedComplaints = SupportData.filter(
//     (complaint) => complaint.status === "resolved"
//   );
//   return (
//     <Paper bg="transparent">
//       <Tabs color="#182452" variant="pills" defaultValue={activeTab}>
//         <Tabs.List>
//           <Tabs.Tab value="newcomplaints" style={{ fontSize: "20px" }}>
//             New Complaints
//           </Tabs.Tab>
//           <Tabs.Tab value="ongoing" style={{ fontSize: "20px" }}>
//             On Going
//           </Tabs.Tab>
//           <Tabs.Tab value="resolved" style={{ fontSize: "20px" }}>
//             Resolved
//           </Tabs.Tab>
//         </Tabs.List>

//         <Tabs.Panel value="newcomplaints" mb="md">
//           <NewComplaints newComplaints={newComplaints} />
//         </Tabs.Panel>

//         <Tabs.Panel value="ongoing">
//           <OngoingComplaints ongoingComplaints={ongoingComplaints} />
//         </Tabs.Panel>

//         <Tabs.Panel value="resolved">
//           <ResolvedCompalints resolvedComplaints={resolvedComplaints}/>
//         </Tabs.Panel>
//       </Tabs>
//     </Paper>
//   );
// }

import React, { useState, useEffect } from "react";
import { Button, Paper, Tabs } from "@mantine/core";
import NewComplaints from "../NewComplaints/NewComplaints";
import OngoingComplaints from "../OngoingComplaints/OngoingComplaints";
import ResolvedCompalints from "../ResolvedCompalints/ResolvedCompalints";
import { useLocation } from "react-router-dom";
import supportData from "./../../../data/Support-data/Support.json";

export default function SupportTabs() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeTab = params.get("tab") || "newcomplaints";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetch call with useEffect
    setLoading(false);
  }, []);

  const ongoingComplaints = supportData.support.filter(
    (complaint) => complaint.status === "ongoing"
  );
  const newComplaints = supportData.support.filter(
    (complaint) => complaint.status === "newcomplaints"
  );
  const resolvedComplaints = supportData.support.filter(
    (complaint) => complaint.status === "resolved"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper bg="transparent">
      <Tabs color="#182452" variant="pills" defaultValue={activeTab}>
        <Tabs.List>
          <Tabs.Tab value="newcomplaints" style={{ fontSize: "20px" }}>
            New Complaints
          </Tabs.Tab>
          <Tabs.Tab value="ongoing" style={{ fontSize: "20px" }}>
            On Going
          </Tabs.Tab>
          <Tabs.Tab value="resolved" style={{ fontSize: "20px" }}>
            Resolved
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="newcomplaints" mb="md">
          <NewComplaints newComplaints={newComplaints} />
        </Tabs.Panel>

        <Tabs.Panel value="ongoing">
          <OngoingComplaints ongoingComplaints={ongoingComplaints} />
        </Tabs.Panel>

        <Tabs.Panel value="resolved">
          <ResolvedCompalints resolvedComplaints={resolvedComplaints} />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
