import { Link } from "react-router-dom";

const ProCard = () => {

    return (
        <div className='m-2 p-5 w-60 lg:w-72 border-2 bg-white mx-auto sm:m-2 rounded-lg shadow-xl'>
            <div>
                <img className="h-52 overflow-hidden border border-red-500" src="{profileIMG}" />
                <p className="text-center text-lg font-semibold">Biodata no: biodataId</p>
            </div>
            <div className="my-3">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold">Type</th>
                            <td className="border-2 border-r-0 p-2">type</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold w-1/2">Division</th>
                            <td className="border-2 border-r-0 p-2">permanentDivision</td>
                        </tr>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold">Age</th>
                            <td className="border-2 border-r-0 p-2">age</td>
                        </tr>
                        <tr>
                            <th className="border-2 border-l-0 p-2 text-left font-semibold">Occupation</th>
                            <td className="border-2 border-r-0 p-2">occupation</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className="flex justify-between gap-2">
                <Link to={`/`} className="SSBtn text-center">View Biodata</Link>
            </div>
        </div>
    );
};

export default ProCard;