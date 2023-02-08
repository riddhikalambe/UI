/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import { Assets } from "assets";

function Team({ teamMembers }) {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        
        <Grid container spacing={3}>
          {teamMembers &&
            teamMembers?.map((Member , key) => (
              <Grid key={key} item xs={12} lg={6}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    image={Assets[`${Member.Image}`]}
                    name={Member.Name}
                    position={{ color: "info", label: `${Member.Designation}` }}
                    description={Member.Description}
                  />
                </MKBox>
              </Grid>
            ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
