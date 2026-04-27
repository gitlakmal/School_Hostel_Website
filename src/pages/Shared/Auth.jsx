import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Auth() {
    const navigate = useNavigate();
    const location = useLocation();

    // URL එක '/login' ද කියලා බලලා State එක හදාගන්නවා
    const [isLoginMode, setIsLoginMode] = useState(location.pathname === '/login');
    const [loading, setLoading] = useState(false);

    // Navbar එකෙන් ලින්ක් එක ක්ලික් කරද්දී URL එකට අදාළව තිරය මාරු වීම
    useEffect(() => {
        setIsLoginMode(location.pathname === '/login');
    }, [location.pathname]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Student'
    });

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxo_KDvxzvrEOSfLzGJmq3Mf9_iG3aFpYnPMpv0n-px-fPKp2eoCqBJSDYh9LSNaW8Abw/exec";

    // Form Submit කරන කොටස
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (isLoginMode) {
            // Login Logic
            alert(`Logging in with: ${formData.email}`);
            navigate('/');
        } else {
            // Sign Up Logic
            try {
                const response = await fetch(SCRIPT_URL, {
                    method: "POST",
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify(formData),
                });

                const result = await response.json();

                if (result.status === "success") {
                    alert("Account Created Successfully! Please Log in.");
                    setFormData({ name: '', email: '', password: '', role: 'Student' });
                    navigate('/login'); // Sign up වූ පසු URL එක Login වලට මාරු කරයි
                } else {
                    alert("Error: " + result.message);
                }
            } catch (error) {
                console.error(error);
                alert("Failed to connect. Try again.");
            }
        }
        setLoading(false);
    };

    // Login සහ Sign up අතර මාරු වීමේ Function එක
    const toggleMode = () => {
        if (isLoginMode) {
            navigate('/signup');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="auth-bg">
            <div className="bold-line"></div>

            <div className="auth-window">
                <div className="auth-overlay"></div>
                <div className="auth-content">
                    {/* තිරයේ Title එක */}
                    <div className="auth-welcome">{isLoginMode ? 'Welcome Back!' : 'Hello There!'}</div>
                    <div className="auth-subtitle">
                        {isLoginMode
                            ? 'Enter your credentials to access your account.'
                            : "We're almost done. Before using our services you need to create an account."}
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 flex-1 flex flex-col">

                        {/* === මෙතනින් තමයි Login වෙද්දී Name එක අයින් කරන්නේ === */}
                        {!isLoginMode && (
                            <input
                                type="text" placeholder="Full Name" required className="input-line"
                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        )}

                        <input
                            type="email" placeholder="Email Address" required className="input-line"
                            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />

                        <input
                            type="password" placeholder="Password" required className="input-line"
                            value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />

                        {/* === Login සහ Signup අතර මාරු වන Link එක === */}
                        <div className="text-center text-white text-sm mt-4 opacity-90">
                            {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                            <span
                                className="auth-highlight"
                                onClick={toggleMode}
                            >
                                {isLoginMode ? 'Sign Up' : 'Log In'}
                            </span>
                        </div>

                        <button type="submit" className="ghost-round mt-auto" disabled={loading}>
                            {loading ? 'Processing...' : (isLoginMode ? 'Log In' : 'Create Account')}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}