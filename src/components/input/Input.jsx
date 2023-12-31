import { InputSpace } from "../input/InputStyled";

export function Input({type, placeholder, register, name}) {
    return (
        <InputSpace type={type} placeholder={placeholder} name={name} 
        {...register(name)} />
    )
}