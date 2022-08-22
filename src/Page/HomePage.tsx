import * as React from "react";
import { LoginOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <>
      <header
        className="lcHeader"
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          alignContent: "center",
          padding: "10px 20px",
          minHeight: "70px",
        }}
      >
        <div
          style={{ marginRight: "20px", cursor: "pointer" }}
          onClick={() => console.log("logOut")}
        >
          <LoginOutlined style={{ marginRight: "5px" }} />
          <span>LOGOUT</span>
        </div>
      </header>

      <div>Hello Home Page</div>
    </>
  );
};

export default HomePage;
