import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../state/auth";
import dayjs from "dayjs";

const Profile = () => {
    const context: any = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {   
        !context.user && navigate('/');
    }, [context.user, navigate])

    const formatDate = (date: string | Date | null) => dayjs(date).format('MMMM DD, YYYY.');
    
    return (
            <>
                <Navbar />
                <Sidebar />
                <section className="section main-section">
                <div className="container mx-auto px-8 overflow-hidden py-8 pb-20">

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    <span className="icon"><i className="mdi mdi-account"></i></span>
                                    {`${context?.user?.username} profile information`}
                                </p>
                            </header>
                            <div className="card-content">
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                <p>{`${context?.user?.username}`}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                <p>{`${context?.user?.email}`}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="field">
                                <div className="control">
                                <p>This account was created on {`${formatDate(context?.user?.createdAt)}`}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;