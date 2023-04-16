import { Card, CardContent, Grid, List, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function NoteList() {
  const { noteId } = useParams();

  const [activeNoteId, setActiveNoteId] = useState(noteId);

  const folders = { notes: [{ id: "1", name: "<p>Note List</p>" }] };
  return (
    <Grid container height="100%">
      <Grid
        item
        xs={4}
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "#F0EBE3",
          heihgt: "100%",
          overflowY: "auto",
          padding: "10px",
          textAlign: "left",
        }}
      >
        <List
          subheader={
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: "5px" }}>
                Notes
              </Typography>
            </Box>
          }
        >
          {folders?.notes?.map(({ id, name }, key) => {
            return (
              <Link
                key={`${id}_${key}`}
                to={`note/${id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setActiveNoteId(id)}
              >
                <Card
                  sx={{
                    mb: "5px",
                    backgroundColor:
                      id === activeNoteId ? "rgb(255 211 140)" : null,
                  }}
                >
                  <CardContent
                    sx={{ "&:last-child": { pb: "10px", padding: "10px" } }}
                  >
                    <div
                      style={{ fontSize: 14, fontWeight: "bold" }}
                      dangerouslySetInnerHTML={{
                        __html: `${name.substring(0, 30) || "Empty"} `,
                      }}
                    ></div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default NoteList;
