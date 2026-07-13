import { ReactNode } from "react";

interface Props {

    children: ReactNode;

}

export default function PageContainer({ children }: Props) {

    return (

        <section className="page-container">

            {children}

        </section>

    );

}