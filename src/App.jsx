import { useState } from "react";


import "/src/tailwind.css";

import Home from "./pages/Home";
import SearchFound from "./pages/SearchFound";
import Comments from "./pages/Comments";
import MemberMyInfo from "./pages/MemberMyInfo";
import MemberMyNoti from "./pages/MemberMyNoti";
import MemberMyComment from "./pages/MemberMyComment";
import WritePage1 from "./pages/WritePage1";
import WritePage2 from "./pages/WritePage2";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

import Test from "./obsolete/Test";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-screen-2xl bg-myFifthColor">
      
      {/* <Home></Home> */}
      <LogIn/>
      {/* <Register/> */}
      {/* <MemberMyInfo></MemberMyInfo> */}
      {/* <SearchFound></SearchFound> */}
      {/* <Comments></Comments> */}
      {/* <MemberMyNoti></MemberMyNoti> */}
      {/* <MemberMyComment></MemberMyComment> */}
      {/* <WritePage1></WritePage1>  */}
      {/* <WritePage2></WritePage2> */}
    </div>
  );
}

export default App;
