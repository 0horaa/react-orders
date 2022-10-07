import { FormHTMLAttributes } from "react";
import { Button } from "../Button";

import "./styles.css";

type RegisterFormProps = FormHTMLAttributes<HTMLFormElement> & {
    description: string;
    setDescription: (description: string) => void;
    price: string;
    setPrice: (price: string) => void;
    details: string;
    setDetails: (details: string) => void;

    buttonTitle?: string;
}

export function OrderForm({
    description,
    setDescription,
    price,
    setPrice,
    details,
    setDetails,
    buttonTitle = "Cadastrar",
    ...rest
}: RegisterFormProps) {
    return (
        <form className="order-form" {...rest}>
                <div className="form-control">
                    <label htmlFor="description">Descrição</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Descreva o pedido"
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="price">Preço</label>
                    <input
                        type="text"
                        id="price"
                        placeholder="Insira o preço total do pedido"
                        onChange={(event) => setPrice(event.target.value)}
                        value={price}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="details">Observações (opcional)</label>
                    <input
                        type="text"
                        id="details"
                        placeholder="Observações sobre o pedido"
                        onChange={(event) => setDetails(event.target.value)}
                        value={details}
                    />
                </div>

                <div className="form-confirm">
                    <Button type="submit">{buttonTitle}</Button>
                </div>
            </form>
    )
}