import React from "react"

//materia-ui
import { Grid, Box, Paper, Typography, Button } from "@mui/material"

const Option1 = () => {
  return (
    <Grid item container justifyContent="">
      <Grid
        item
        phone={12}
        tablet={6}
        sx={{ p: { phone: 1, tablet: 2, laptop: 10 } }}
      >
        <Box
          component="img"
          src="/undraw_noted_pc9f.svg"
          sx={{
            mb: { phone: 5, tablet: 0 },
            p: 3,
            maxWidth: "100%",
            boxShadow: "2px 2px 5px rgb(0, 0, 0, .2)",
            borderRadius: "10px",
          }}
        />
      </Grid>
      <Grid item phone={12} tablet={6} sx={{ my: "auto" }}>
        <Paper elevation={0}>
          <Typography align="center" variant="h2" sx={{ mb: 5 }}>
            Bookmark in on click
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mb: 3,
              mx: { phone: "auto" },
              textAlign: { phone: "center" },
              maxWidth: { tablet: "55%", laptop: "40%" },
            }}
          >
            Organize your bookmarks however you like. Our simple drag-drop
            interface gives you complete control over how you manage your
            favorite sites.
          </Typography>

          <Grid container>
            <Grid item sx={{ mx: "auto" }}>
              <Button>
                <Typography variant="subtitle2">More info</Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Option1
