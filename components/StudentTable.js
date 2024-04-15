"use client";
import { Table } from "antd";
import { useEffect, useRef, useState } from "react";

export default function StudentTable({ students }) {
  const [programmes, setProgrammes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const filters = programmes.map((programme) => ({
    text: programme.name,
    value: programme.slug,
  }));

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/programme");
        const data = await response.json();

        setProgrammes(data.programme);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "Programme",
      dataIndex: "programme",
      key: "programme",
      showSorterTooltip: {
        target: "full-header",
      },
      filters: filters,
      onFilter: (value, record) => record.programme === value,

      filterMode: "tree",
      filterSearch: true,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Enrolment",
      dataIndex: "enrolment",
      key: "enrolment",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Alternate Email",
      dataIndex: "email2",
      key: "email2",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <main className="min-h-screen p-2 ">
      <Table
        className="overflow-x-auto"
        dataSource={students}
        columns={columns}
      />
    </main>
  );
}
