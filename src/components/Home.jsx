import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Footer from './Footer';

function Home() {
  return (
    <Container>
        <Section
           title="Model S"
           description="Order Online for Touchles Delivery"
           backgroundImg="model-s.jpg"
           leftButnText="Custom order"
           rightBtnText="Existing inventory"
         />
         <Section
           title="Model Y"
           description="Order Online for Touchles Delivery"
           backgroundImg="model-y.jpg"
           leftButnText="Custom order"
           rightBtnText="Existing inventory"
         />
         <Section
           title="Model 3"
           description="Order Online for Touchles Delivery"
           backgroundImg="model-3.jpg"
           leftButnText="Custom order"
           rightBtnText="Existing inventory"
         />
         <Section
           title="Model X"
           description="Order Online for Touchles Delivery"
           backgroundImg="model-x.jpg"
           leftButnText="Custom order"
           rightBtnText="Existing inventory"
         />
          <Section
           title="Lowest Cost Solar Panel in America"
           description="Money-back guarantee"
           backgroundImg="solar-panel.jpg"
           leftButnText="Order now"
           rightBtnText="Learn more"
         />
          <Section
           title="Solar for New Roofs"
           description="Solar Roofs Costs Less Then a New Roof plus Solar Panels"
           backgroundImg="solar-roof.jpg"
           leftButnText="Order now"
           rightBtnText="Learn more"
         />
          <Section
           title="Accessories"
           description="Money-back guarantee"
           backgroundImg="accessories.jpg"
           leftButnText="Shop now"
           
         />

         <Footer />
    </Container>
  )
}

export default Home;

const Container=styled.div`
height:100vh;
`