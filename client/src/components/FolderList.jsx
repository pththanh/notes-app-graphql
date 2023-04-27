import { List, Card, CardContent, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewFolder from "./NewFolder";

function FolderList({ folders }) {
  const { folderId } = useParams();
  const [activeFolderId, setActiveFolderId] = useState(folderId);
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
      subheader={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold", mb: "5px" }}>
            Folders
          </Typography>
          <NewFolder />
        </Box>
      }
    >
      {folders?.map((item, index) => {
        return (
          <Link
            key={`${item?.id}_${index}`}
            to={`folders/${item.id}`}
            style={{
              textDecoration: "none",
            }}
            onClick={() => setActiveFolderId(item.id)}
          >
            <Card
              sx={{
                mb: "5px",
                backgroundColor:
                  item.id === activeFolderId ? "rgb(255 211 140)" : null,
              }}
            >
              <CardContent
                sx={{ "&:last-child": { pb: "10px" }, padding: "10px" }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </List>
  );
}

export default FolderList;
