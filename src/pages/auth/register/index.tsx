import AuthLayout from "@/components/layouts/AuthLayout";
import Register from "@/components/views/Auth/Register";

import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <AuthLayout title="Auth | Register">
      <Register />
    </AuthLayout>
  );
};

export default RegisterPage;
