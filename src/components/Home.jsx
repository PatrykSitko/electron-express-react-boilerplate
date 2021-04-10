import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ state: { title } }) => ({ title });
function Home({ title }) {
  return <div>{title}</div>;
}

export default connect(mapStateToProps)(Home);
