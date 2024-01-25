import React from "react";
import LandingPage from "@/Components/Screens/General/LandingPage/LandingPage";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Button variant="light" color="primary">Click Me</Button>
    </>
  )
}


