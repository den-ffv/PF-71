import React from "react";

const AdminAuth = () => {
    const [data, setData] = React.useState({email: '', password: ''});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    }


    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try{
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const result = await response.json();
            console.log(result);

            if(result){
                localStorage.setItem('token', result.id);
                window.location.href = '/';
            }

        }catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        }finally {
            setLoading(false);
        }

        const response = fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log(response)
    }

    return (
        <div
        className={'absolute top-0 left-0 w-screen h-screen bg-white flex flex-col justify-center items-center'}>
            <h1 className='text-center text-3xl text-blue-600 font-bold mb-5'>AdminAuth</h1>
            <form className='w-64 flex flex-col justify-center items-center' onSubmit={handleSend}>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className='bg-stone-200 m-1 rounded p-1 border border-slate-700 border-solid text-sm w-full'
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className='bg-stone-200 m-1 rounded p-1 border border-slate-700 border-solid text-sm w-full'
                    required
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                    type="submit"
                    className={`w-full bg-blue-600 text-cyan-50 rounded h-8 mt-5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default AdminAuth;
