import Login from "../pages/auth/Login";
import RegisterPage from "../pages/auth/RegisterPage";
import VerifyEmailPage from "../pages/auth/VerifyEmailPage";
import VerifyOtpPage from "../pages/auth/VerifyOtpPage";

export const routes = [
  {
    Name: "Sign up Page",
    url: "/",
    page: <RegisterPage />,
  },
  {
    Name: "Sign in Page",
    url: "/sign-in",
    page: <Login />,
  },
  {
    Name: "Verify Email Page",
    url: "/verify-email",
    page: <VerifyEmailPage />,
  },
  {
    Name: "Verify OTP Page",
    url: "/verify-otp",
    page: <VerifyOtpPage />,
  },
];
