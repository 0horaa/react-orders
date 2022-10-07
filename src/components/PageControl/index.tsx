import { ReactNode } from "react";

type PageControlProps = {
    title: string;
    children?: ReactNode;
}

export function PageControl({ title, children }: PageControlProps) {
    return (
        <section className="page-control">
            <h2>{title}</h2>
            {children}
        </section>
    );
}