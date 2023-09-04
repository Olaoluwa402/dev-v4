import React, { useState, useEffect, useContext } from "react";
import Hero from "../components/Hero/Hero";
import Blog from "../components/Blog/Blog";
import {
  ClassState,
  StateManagementHook,
} from "../components/StateManagement/StateManagement";
import Forms from "../components/Forms/Forms";
import Form2 from "../components/Forms/Forms-2/Form-2";
import Conditional from "../components/ConditionalRendering/Conditional";
import { GlobalContext } from "../context";

import styles from "./Home.module.css";
const HomeScreen = () => {
  const { blogData, isLoading, sum } = useContext(GlobalContext);

  console.log(isLoading, sum([10, 20, 30, 40]));
  const [count, setCount] = useState(0);

  useEffect(() => {
    //compomnetDidMount  - lifecycle
    document.title = `You clicked ${count} times`;
    return () => {
      //componentWillUnmonut lifecycle - for cleanups
    };
  }, [count]); //componentDidUpdate -lifecycle

  //don't look for blogData here anymore. Its in the context

  return (
    <div>
      <section className={styles.header}>
        {/* hero */}
        <Hero />
      </section>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      {/* state */}
      {/* <Forms /> */}
      <Form2 />
      <Conditional />
      {/* blog */}
      <Blog blogData={blogData} />
      {/* footer */}
    </div>
  );
};

export default HomeScreen;
