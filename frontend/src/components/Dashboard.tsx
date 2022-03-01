import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useQuery } from '@apollo/client';
import { POLICY } from '../api/queries';
import Table from './Table';
import TableLayout from '../layouts/TableLayout';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../state/auth";

const Dashboard = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    !context.user && navigate('/');

    /**
     * Destructure the three properties from Apollo client 
     * useful for rendering the data
     */
     const { loading, error, data } = useQuery(POLICY);
     if (loading) return <>Loading...</>;
     if (error) return <>`Error! ${error.message}`</>;
    return (
        <>
            <Navbar />
            <Sidebar />
            <section className="section main-section">
                <div className="container mx-auto px-8 overflow-hidden py-8 pb-20">
                    <TableLayout>
                        <Table policies={ data?.policies } />
                    </TableLayout>
                </div>
            </section>

        </>
    )
}

export default Dashboard