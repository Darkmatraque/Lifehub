import { ReactNode } from "react";

interface CardProps {

    title?: string;

    children: ReactNode;

}

export default function Card({

    title,

    children

}: CardProps) {

    return (

        <div className="lh-card">

            {title && (

                <div className="lh-card-header">

                    <h3>{title}</h3>

                </div>

            )}

            <div className="lh-card-body">

                {children}

            </div>

        </div>

    );

}
