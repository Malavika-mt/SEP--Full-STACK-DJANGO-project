import React, { useState, useEffect } from "react";
import axios from "axios";

function LiveStudentlist(){
    const [students, setstudents]= useState([]);
    const [loading,setloading]=useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let cancelled = false;

        const fetchData = async () => {
            try {
                // Add a timeout to avoid waiting forever
                const res = await axios.get('http://localhost:8000/academic/api/students/', { timeout: 8000 });

                console.log('=====DJANGO API DEBUG ======');
                console.log('Full Response:', res);
                console.log('students Data:', res.data);
                console.log('Total Students:', res.data.length);
                console.log('===================');

                if (!cancelled) setstudents(res.data || []);
            } catch (error) {
                console.error('Error connecting to Django:', error.message || error);
                if (!cancelled) setstudents([]);
                if (!cancelled) setErrorMessage(
                    error.code === 'ECONNABORTED'
                        ? 'Request timed out (server too slow).'
                        : 'Unable to fetch students. Check server/CORS.'
                );
            } finally {
                if (!cancelled) setloading(false);
            }
        };

        fetchData();

        return () => {
            cancelled = true;
        };
    }, []);

            return (
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Students (Live from Django)</h2>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading students...</p>
                    ) : errorMessage ? (
                        <p className="text-center text-red-600">{errorMessage}</p>
                    ) : students.length === 0 ? (
                        <p className="text-center text-gray-500">No students found</p>
                    ) : (
                        students.map((s) => (
                            <div
                                key={s.id}
                                className="bg-white border border-black p-4 my-3 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-semibold">
                                    {s.first_name} {s.last_name}
                                </h3>

                                <p className="text-gray-600 text-sm mt-1">{s.email}</p>
                            </div>
                        ))
                    )}
                </div>
            );
        

}

export default LiveStudentlist;
    