import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../state/auth";

const Profile = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    !context.user && navigate('/');
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
                                    Profile
                                </p>
                            </header>
                            <div className="card-content">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                <input type="text" value="John Doe" className="input is-static"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="field">
                                <label className="label">E-mail</label>
                                <div className="control">
                                <input type="text"  value="user@example.com" className="input is-static"/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile