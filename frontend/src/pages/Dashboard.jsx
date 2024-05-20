import { useEffect, useState } from "react";
import axios from "axios";
import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { UserComponent } from "../components/UserComponent";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem("token"); 
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBalance(response.data.balance); 
            } catch (err) {
                console.error("Error fetching balance:", err);
                setError(err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchBalance(); // Call the function to fetch balance
    }, []); // Empty dependency array means this effect runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>; // Display loading message while fetching data
    }

    if (error) {
        return <div>Error fetching balance</div>; // Display error message if there's an error
    }

    return (
        <div>
            <Appbar />
            <Balance value={balance} />
            <UserComponent />
        </div>
    );
};
