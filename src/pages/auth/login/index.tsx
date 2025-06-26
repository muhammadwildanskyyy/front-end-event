import AuthLayout from "@/components/layouts/AuthLayout";
import Login from "@/components/views/Auth/Login";

import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <AuthLayout title="Auth | Login">
      <Login />
    </AuthLayout>
  );
};

export default RegisterPage;
