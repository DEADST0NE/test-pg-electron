import { Layout } from "antd";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../components/Home';

const Pages = () => {
  return (

    <Layout style={{ minHeight: "100vh" }}>
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Layout>
  )
};

export { Pages };