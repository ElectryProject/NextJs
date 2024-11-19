import seta from '../../images/seta.png'

const Page: React.FC = () => {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-6"
            style={{ backgroundColor: "#E5B43B" }}
        >
            <div
                className="w-full max-w-md p-6 rounded-lg mb-8"
                style={{ backgroundColor: "#E5B43B" }}
            >
                <h1 className="text-2xl font-bold text-center mb-6 text-black">Cadastre seu descarte</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Produto e Categoria"
                        className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                        style={{ boxShadow: "0 0 0 2px #E5B43B" }}
                    />
                    <input
                        type="date"
                        placeholder="Informe a data do seu descarte"
                        className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                        style={{ boxShadow: "0 0 0 2px #E5B43B" }}
                    />
                    <input
                        type="text"
                        placeholder="Informe a localização do ponto de coleta escolhido"
                        className="w-full p-3 mb-4 border border-gray-400 rounded-lg focus:outline-none focus:ring-2"
                        style={{ boxShadow: "0 0 0 2px #E5B43B" }}
                    />
                    <button
                        type="submit"
                        className="w-1/3 bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition mx-auto block"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
 
            <div
                className="w-full max-w-lg p-6 rounded-lg"
                style={{ backgroundColor: "#E5B43B" }}
            >
                <h2 className="text-xl font-bold text-center mb-6 text-black">Agenda de descartes</h2>
                <table
                    className="w-full table-auto border-collapse border"
                    style={{ borderColor: "#A07E29" }}
                >
                    <thead>
                        <tr>
                            <th
                                className="px-4 py-2 text-black"
                                style={{ border: "3px solid #A07E29" }}
                            >
                                Produto
                            </th>
                            <th
                                className="px-4 py-2 text-black"
                                style={{ border: "3px solid #A07E29" }}
                            >
                                Data Agendada
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                className="px-4 py-2 text-black"
                                style={{ border: "3px solid #A07E29" }}
                            >
                                Televisão Samsung 32 polegadas
                            </td>
                            <td
                                className="px-4 py-2 text-black"
                                style={{ border: "3px solid #A07E29" }}
                            >
                                17/12/2024
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
 
            <div
                className="absolute bottom-4 left-4"
            >
                <a href="/home">
                    <img
                        src={seta.src}
                        alt="Voltar"
                        className="w-8 h-8 hover:opacity-80 transition-opacity"
                    />
                </a>
            </div>
        </div>
    );
};
 
export default Page;