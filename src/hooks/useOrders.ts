import { useState, useEffect } from "react";
import Swal from "sweetalert2";

import { api } from "../services/api";
import { Order } from "../@types/order";

export function useOrders() {
    const [orders, setOrders] = useState<Order[]>([]);

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

    useEffect(() => {
        fetchOrders();
    }, []);

    return {
        orders,
        fetchOrders
    }
}