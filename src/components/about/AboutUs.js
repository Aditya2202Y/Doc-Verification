import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h2" gutterBottom align="center">
        About Us
      </Typography>
      <Typography variant="h5" gutterBottom>
        Who We Are
      </Typography>
      <Typography paragraph>
        We are a team of passionate individuals dedicated to making a difference in the world through technology. Our mission is to provide innovative solutions and exceptional service to our clients allowing them to verify the documents with ease through Blocchain Technology.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Sharath Kariyappa krupakara</Typography>
            <Typography variant="body1">Full Stack blockchain developer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Sharan Onamshety</Typography>
            <Typography variant="body1">Blockchain Developer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Aditya Yadav</Typography>
            <Typography variant="body1">Smart Contract Developer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={styles.paper}>
            <Typography variant="h6">Sriniwas Mane</Typography>
            <Typography variant="body1">Blockchain Developer</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography paragraph>
        Our mission is to harness the power of technology to create solutions that make life easier and more enjoyable for our clients.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions or would like to learn more about what we do, please <a href="Blockean@org.in">email us</a>. We’d love to hear from you!
      </Typography>
    </Container>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default AboutUs;
