import type { NextPage } from "next";
import Head from "next/head";
import LoginPage from "./loginPage";

const Home: NextPage = () => {
  return (
    <>
    <LoginPage/>
    <LoginPage></LoginPage>
    </>
  );
};

export default Home;
