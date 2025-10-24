const Loops = () => {
    const userData = [
        { name: "abhi", email: "email.test.@gmail.com", age: 15, id: 1 },
        { name: "john", email: "john.test.@gmail.com", age: 15, id: 2 },
        { name: "thomas", email: "thomas.test.@gmail.com", age: 15, id: 3 },
    ];

    return (
        <div className="mx-auto max-w-4xl mt-8 p-6">
            <h2 className="text-2xl font-semibold mb-4">Users</h2>

            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                    <caption className="sr-only">List of users</caption>
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Age
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {userData.map((data) => (
                            <tr key={data.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{data.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{data.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Loops;
