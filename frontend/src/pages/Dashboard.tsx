import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useQuery } from '@apollo/client';
import { POLICY } from '../api/queries';
import Table from '../components/Table';
import TableLayout from '../layouts/TableLayout';
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../state/auth";

const Dashboard = () => {
    const context: any = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {   
        !context.user && navigate('/');
    }, [context.user, navigate])
    

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