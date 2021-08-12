import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
// import "./../Components/Appbar.css";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";

const Table = () => {
  const [data, setData] = useState();

  const columns = [
    {
      title: "Keywords",
      field: "keyword",
    },
    {
      title: "",
      field: "name",
      render: () => (
        <div>
          <SearchIcon />
        </div>
      ),
    },
    {
      title: "Goal",
      field: "goal",
    },
    {
      title: "Matches",
      field: "matches",
    },
    {
      title: "Search Status",
      field: "search_status",
    },
    {
      title: "Delete Keyword",
      field: "name",
      render: () => (
        <div>
          <DeleteIcon />
        </div>
      ),
    },
  ];
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
    )
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      });
  }, []);
  //   const [data, setData] = useState([]);
  //   const columns = [
  //     { title: "ID", field: "id" },
  //     { title: "Username", field: "username" },
  //     { title: "Name", field: "name" },
  //     { title: "Email", field: "email" },
  //     { title: "Phone", field: "phone" },
  //     { title: "Web Link", field: "website" },
  //   ];
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((resp) => resp.json())
  //       .then((resp) => {
  //         setData(resp);
  //       });
  //   }, []);
  return (
    <div>
      <Container>
        <MaterialTable
          title=""
          data={data}
          columns={columns}
          options={{
            search: false,
            paging: false,
            cellStyle: {
              justifyContent: "center",
            },
          }}
        />
      </Container>
    </div>
  );
};

export default Table;
