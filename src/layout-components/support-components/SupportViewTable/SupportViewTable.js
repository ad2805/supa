import { Table } from "@mantine/core";

export default function Demo({ complaint }) {
  return (
    <Table
      withColumnBorders
      striped
      highlightOnHover
      withTableBorder
      // horizontalSpacing="md"
      verticalSpacing="sm"
    >
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Model</Table.Td>
          <Table.Td>{complaint ? complaint.model : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>E-mail</Table.Td>
          <Table.Td>{complaint ? complaint.email : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Contact Number</Table.Td>
          <Table.Td>{complaint ? complaint.contactNumber : "------"}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Last Service</Table.Td>
          <Table.Td>{complaint ? complaint.lastServeice : "------"}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
