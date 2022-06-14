import ClientForm from "../components/ClientForm";

const CreateClient = () => {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">Completa el siguiente formulario para crear un nuevo cliente.</p>

            <ClientForm />
        </>
    );
};

export default CreateClient;
