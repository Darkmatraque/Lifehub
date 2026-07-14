import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: Props) {

    return (

        <input
            className="lh-input"
            {...props}
        />

    );

}
