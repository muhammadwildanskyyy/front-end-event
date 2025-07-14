import { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/Auth";
import authServices from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { ToasterContext } from "@/contexts/ToasterContext";

const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please input your UserName/Email"),
  password: yup
    .string()
    .min(8, "Minimal 8 Characters")
    .required("Please input your password"),
});

const useLogin = () => {
  const router = useRouter();
  const [isVisible, setVisible] = useState(false);
  const toogleVisibility = () => setVisible(!isVisible);
  const callbackUrl: string = (router.query.callbackUrl as string) || "/";
  const { setToaster } = useContext(ToasterContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginService = async (payload: ILogin) => {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false,
      callbackUrl,
    });
    if (result?.error && result?.status === 401) {
      throw new Error("Email or username not match with your password");
    }
  };

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError: () => {
      setToaster({
        type: "error",
        message: "Your credential is wrong",
      });
    },
    onSuccess: () => {
      reset();
      setToaster({
        type: "success",
        message: "Login success",
      });
      router.push(callbackUrl);
    },
  });

  const handleLogin = (data: ILogin) => mutateLogin(data);

  return {
    isVisible,
    toogleVisibility,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
};

export default useLogin;
