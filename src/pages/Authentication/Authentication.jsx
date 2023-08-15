import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpan } from "../../components/Navbar/Navbar-styled";

export function Authentication() {
  const {
    reset: resetSignup,
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: {errors: errorsSignup },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const {
    reset: resetSignin,
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    formState: { errors: errorsSignin },
  } = useForm({ resolver: zodResolver(signinSchema) });

  const inHandleSubmit = (data) => {
    console.log(data);
  };

  const upHandleSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthContainer>
      <Section in type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignin}
          />
          {errorsSignin.email && <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignin}
          />
          {errorsSignin.password && <ErrorSpan>{errorsSignin.password.message}
          </ErrorSpan>}
          <Button type="submit" text="Entrar"/>
        </form>
      </Section>

      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignup}
          />
          {errorsSignup.name && <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignup}
          />
          {errorsSignup.email && <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignup}
          />
          {errorsSignup.password && <ErrorSpan>{errorsSignup.password.message}
          </ErrorSpan>}
          <Input
            type="password"
            placeholder="Confirmar Senha"
            name="confirmPassword"
            register={registerSignup}
          />
          {errorsSignup.confirmPassword && <ErrorSpan>{errorsSignup.confirmPassword.message}
          </ErrorSpan>}
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}
