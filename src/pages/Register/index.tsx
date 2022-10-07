import { FormEvent, useState } from "react";
import Swal from "sweetalert2";

import { PageControl } from "../../components/PageControl";
import { OrderForm } from "../../components/OrderForm";
import { api } from "../../services/api";

export function Register() {
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");

    async function handleRegisterOrder(event: FormEvent) {
        event.preventDefault();

        try {
            await api.post("/orders", {
                description,
                price,
                details,
                status: 0
            });
    
            Swal.fire({
                icon: "success",
                title: "Tudo certo!",
                text: "Pedido cadastrado com sucesso!"
            });
            
            setDescription("");
            setPrice("");
            setDetails("");
        } catch (error) {
            console.error(error);

            Swal.fire({
                icon: "error",
                title: "Algo deu errado!",
                text: "Não foi possível cadastrar o pedido!"
            });
        }
    }

    return (
        <main>
            <PageControl title="Cadastro de pedidos" />

            <OrderForm
                onSubmit={handleRegisterOrder}
                description={description}
                setDescription={setDescription}
                price={price}
                setPrice={setPrice}
                details={details}
                setDetails={setDetails}
            />
        </main>
    );
}