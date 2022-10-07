import { useState, useEffect, FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { PageControl } from "../../components/PageControl";
import { OrderForm } from "../../components/OrderForm";

import { api } from "../../services/api";
import "./styles.css";

export function Edit() {
    const params = useParams();
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchOrder() {
            try {
                const { data } = await api.get(`/orders/${params.id}`);

                setDescription(data.description);
                setPrice(data.price);
                setDetails(data.details);

                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        fetchOrder();
    }, []);

    async function handleUpdateOrder(event: FormEvent) {
        event.preventDefault();

        try {
            await api.put(`/orders/${params.id}`, {
                description,
                price,
                details,
                status: 0
            });

            Swal.fire({
                icon: "success",
                title: "Tudo certo!",
                text: "Pedido atualizado com sucesso!",
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 1500
            });
            
            setTimeout(() => navigate("/"), 1600);
        } catch (error) {
            console.error();

            Swal.fire({
                icon: "error",
                title: "Algo deu errado!",
                text: "Não foi possível atualizar os dados do pedido"
            });
        }
    }

    return (
        <main>
            <PageControl title="Edição de pedidos" />

            {isLoading ? (
                <div className="loading">
                    <span>Aguarde...</span>
                </div>
            ) : (
                <OrderForm
                    onSubmit={handleUpdateOrder}
                    description={description}
                    setDescription={setDescription}
                    price={price}
                    setPrice={setPrice}
                    details={details}
                    setDetails={setDetails}
                    buttonTitle="Atualizar"
                />
            )}
        </main>
    );
}