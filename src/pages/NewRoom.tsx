import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";

export function NewRoom() {
  const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Letmeask" />
        <strong>Every question has an answer.</strong>
        <p>Learn and share knowledge with others</p>
      </aside>
      <main>
        <h1>{user?.name}</h1>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Create a new room</h2>
          <form>
            <input type="text" placeholder="Room's name" />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Do you want to enter an existing room?{" "}
            <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
