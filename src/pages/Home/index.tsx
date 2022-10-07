import { useNavigate, Link } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";

import { useOrders } from "../../hooks/useOrders";
import { PageControl } from "../../components/PageControl";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

import { Order } from "../../@types/order";
import "./styles.css";

export function Home() {
    const navigate = useNavigate();
    const { orders, fetchOrders } = useOrders();

    function handleNavigateToRegister() {
        navigate("/cadastrar-pedidos");
    }

    async function handleChangeStatusOrder(order: Order) {
        order.status = 1;

        try {
            await api.put(`/orders/${order.id}`, order);

            Swal.fire({
                icon: "success",
                title: "Tudo certo!",
                text: "Pedido entregue com sucesso!"
            });

            fetchOrders();
        } catch (error) {
            console.error(error);

            Swal.fire({
                icon: "error",
                title: "Algo deu errado",
                text: "Não foi possível mudar o status do pedido"
            });
        }
    }

    return (
        <main>
            <PageControl title="Pedidos pendentes">
                <Button onClick={handleNavigateToRegister}>Cadastrar pedidos</Button>
            </PageControl>

            <section className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>OBSERVAÇÕES</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.filter((order) => order.status === 0).map((order) => {
                            const id = order.id;

                            return (
                                <tr key={id}>
                                    <td>{order.description}</td>
                                    <td>{order.price}</td>
                                    <td>{order.details}</td>
                                    <td className="actions">
                                        <Link to={`/editar-pedido/${id}`} className="actions-button edit-button">
                                            <i>
                                                <FaEdit />
                                            </i>
                                        </Link>
                                        <button
                                            type="button"
                                            className="actions-button check-button"
                                            onClick={() => handleChangeStatusOrder(order)}
                                        >
                                            <i>
                                                <FaCheck />
                                            </i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </main>
    );
}