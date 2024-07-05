import Fitness from "./utils/Images/AuthImage.jpg"; // Replace with the correct path to your Fitness image
import LoginForm from "./components/Login";

const LoginPage: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ background: `url(${Fitness})` }}
    >
      {/* <div className="md:w-[150vh] p-4 ">
        <img src={Fitness} alt="Fitness Image" className="w-full h-auto" />
      </div> */}
      <div className="md:w-[50rem] p-1 md:p-2 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
