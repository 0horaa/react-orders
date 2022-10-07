import { PageControl } from "../../components/PageControl";
import { useOrders } from "../../hooks/useOrders";

export function Completeds() {
    const { orders } = useOrders();

    return (
        <main>
            <PageControl title="Pedidos entregues" />

            <section className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>DESCRIÇÃO</th>
                            <th>PREÇO</th>
                            <th>DETALHES</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.filter((order) => order.status === 1).map((order) => {
                            const id = order.id;
                            
                            return (
                                <tr key={id}>
                                    <td>{order.description}</td>
                                    <td>{order.price}</td>
                                    <td>{order.details}</td>
                                    <td></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </main>
    );
}