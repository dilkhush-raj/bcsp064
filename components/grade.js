"use client";

import React, { useEffect, useState } from "react";
import cheerio from "cheerio";
import axios from "axios";

export default function GradecardTable() {
  const [marks, setMarks] = useState();

  const enrollment = "2106030036";
  const programme = "bca";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://gradecard.ignou.ac.in/gradecard/view_gradecard.aspx?eno=${enrollment}&prog=${programme}&type=1`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setMarks(result);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs once on component mount

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // The HTML content you provided
    const htmlContent = `${marks}`;

    // Load the HTML content into cheerio
    const $ = cheerio.load(htmlContent);

    // Extract data from the table
    const tableData = [];
    $("table#ctl00_ContentPlaceHolder1_gvDetail tr").each((index, element) => {
      if (index === 0) {
        // Header row, skip it
        return;
      }
      const rowData = [];
      $(element)
        .find("td")
        .each((i, cell) => {
          rowData.push($(cell).text().trim());
        });
      tableData.push(rowData);
    });

    // Set the extracted data to the state
    setData(tableData);
  }, []);

  return (
    <div>
      <h1>Table Data</h1>
    </div>
  );
}
