import { useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { Table } from "@mui/material";

function AddEmployee() {

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>  Add Employee Details</MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Full Name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Designation" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Sort Summary" multiline fullWidth rows={3} />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" > Submit Data </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
      
        {/* <div>
        <Grid>
        <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Designation</th>
          <th>Sort Summary</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
                <td>John</td>
                <td>Developer</td>
                <td>Lorem ipsum dolor sem culpa nesciunt nihil aut nostrum explicabo repr. Voluptatum ducimus voluptates voluptas?</td>
        </tr>
      </tbody>
    </Table>
    </Grid>
        </div> */}
        
    </MKBox>
    
  );
}

export default AddEmployee;