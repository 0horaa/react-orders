import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Button } from "../../components/Button";
import { api } from "../../services/api";

import "./styles.css";

type Order = {
    id: number;
    description: string;
    price: string;
    details: string;
    status: number;
}

export function Home() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState<Order[]>([]);

    function handleNavigateToRegister() {
        navigate("/cadastrar-pedidos");
    }

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await api.get("/orders");
                setOrders(response.data);
            } catch (error) {
                console.error(error);
                
                Swal.fire({
                    icon: "error",
                    title: "Algo deu errado",
                    text: "Não foi possível buscar os pedidos"
                });
            }
        }

        fetchOrders();
    }, []);

    return (
        <main>
            <section className="page-control">
                <h2>Pedidos pendentes</h2>
                <Button onClick={handleNavigateToRegister}>Cadastrar pedidos</Button>
            </section>

            <section className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>OBSERVAÇÕES</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.description}</td>
                                    <td>{order.price}</td>
                                    <td>{order.details}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </main>
    );
}