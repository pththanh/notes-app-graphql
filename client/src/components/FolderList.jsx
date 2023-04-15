import { List, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function FolderList({ folders }) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "#7D9D9C",
        height: "100%",
        padding: "10px",
        textAlign: "left",
        overflow: "auto",
      }}
    >
      {folders?.map((item, index) => {
        return (
          <Link
            key={`${item?.id}_${index}`}
            to={`folders/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card sx={{ mb: "5px" }}>
              <CardContent
                sx={{ "&:last-child": { pb: "10px" }, padding: "10px" }}
              >
                <Typography>{item.name}</Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </List>
  );
}

export default FolderList;
