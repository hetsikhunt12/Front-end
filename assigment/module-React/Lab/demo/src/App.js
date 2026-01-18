import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ReactIntro from './ReactIntro';
import Hello from './Jsx/Hello';
import Greeting from './Component/Greeting';
import WelcomeMessage from './Component/WelcomeMessage';
import UserCard from './Props/Usercard';
import Counter from './State/Counter';
import UserForm from './FormHandling/UserForm';
import ClickButton from './FormHandling/ClickButton';
import Login from './Conditional/Login';
import Vote from './Conditional/Vote';
import FruitList from './List & Key/FruitList';
import UserList from './List & Key/Userlist';
import Validation from './Form/Validation';
import RegisterForm from './Form/RegisterForm';
import DataFetch from './Class Component/DataFetch';
import Data from './Class Component/Data';
import Counte from './Hooks/Count';
import Users from './Hooks/Users';
import UserRef from './Hooks/UserRef';
import Home from "./Router/Home";
import About from "./Router/About";
import Contact from "./Router/Contact";
import UsersTable from './React-Json/UsersTable';
import CrudUsers from './React-Json/CrudUsers';



function App() {
  return (
    <div>
      {/* <ReactIntro /> */}

      {/* <Hello /> */}

      {/* <Greeting name="Hetsi" />
      <WelcomeMessage /> */}

      {/* <UserCard
          name="Hetsi"
          age={20}
          location="Ahmedabad" />
      <Counter /> */}

      {/* <ClickButton />
      <UserForm /> */}

      {/* <Login />
      <Vote /> */}

      {/* <FruitList />
      <UserList /> */}

      {/* <RegisterForm />
      <Validation /> */}

      {/* <DataFetch />
      <Data /> */}

      {/* <Counte />
      <Users />

      <UserRef />  */}

      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}

      {/* <UsersTable />
      <CrudUsers /> */}

      



    </div>

  );
}

export default App;