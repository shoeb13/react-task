import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

import "./homepage.css";

export default function Homepage(props) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts 
    blogs={props.blogs}
        />

      </div>
    </>
  );
}
