type Props = {
    description: string;
}

export function Title({ description }: Props) {
    return (
        <h1 className="title">{description}</h1>
    );
}