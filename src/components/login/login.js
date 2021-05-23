import Heading from "../layout/heading";
import LoginForm from "./loginForm";

export default function Login() {
  return (
    <>
    <div className="adminlogin">
      <Heading title="Administration" />
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  );
}
