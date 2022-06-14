import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import ErrorAlert from "./ErrorAlert";

const ClientForm = ({ client }) => {
    const navigate = useNavigate();

    const newClientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "¡El nombre es muy corto!")
            .max(32, "¡El nombre es muy extenso!")
            .required("¡El nombre es obligatorio!"),
        company: Yup.string().required("¡El nombre de la empresa es obligatorio!"),
        email: Yup.string()
            .email("Verifica que el email tenga el formato adecuado.")
            .required("¡El email es obligatorio!"),
        phone: Yup.string()
            .matches(/[()+-\s\d]+$/, "Verifica que el teléfono tenga el formato adecuado.")
            .min(8, "¡El número de teléfono es muy corto!")
            .max(24, "¡El número de teléfono es muy extenso!"),
        notes: Yup.string(),
    });

    const handleSubmit = async values => {
        try {
            const url = `https://my-json-server.typicode.com/ShadeDev7/Curso-React-La-Guia-Completa/clientes/${
                client?.id ?? ""
            }`;

            await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: `${client?.id ? "PUT" : "POST"}`,
                body: JSON.stringify(values),
            });

            navigate("/clientes");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
                {client?.name ? "Editar" : "Crear"} Cliente
            </h1>

            <Formik
                initialValues={{
                    name: client?.name ?? "",
                    company: client?.company ?? "",
                    email: client?.email ?? "",
                    phone: client?.phone ?? "",
                    notes: client?.notes ?? "",
                }}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values);
                    resetForm();
                }}
                validationSchema={newClientSchema}
            >
                {({ errors, touched }) => (
                    <Form className="mt-10">
                        <div className="mb-4">
                            <label htmlFor="name" className="text-gray-800">
                                Nombre
                            </label>

                            <Field
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Nombre del Cliente"
                                className="mt-2 block w-full p-3 bg-gray-50"
                            />

                            {errors.name && touched.name && <ErrorAlert>{errors.name}</ErrorAlert>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="company" className="text-gray-800">
                                Empresa
                            </label>

                            <Field
                                id="company"
                                name="company"
                                type="text"
                                placeholder="Empresa del Cliente"
                                className="mt-2 block w-full p-3 bg-gray-50"
                            />

                            {errors.company && touched.company && <ErrorAlert>{errors.company}</ErrorAlert>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="text-gray-800">
                                Email
                            </label>

                            <Field
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email del Cliente"
                                className="mt-2 block w-full p-3 bg-gray-50"
                            />

                            {errors.email && touched.email && <ErrorAlert>{errors.email}</ErrorAlert>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="text-gray-800">
                                Teléfono
                            </label>

                            <Field
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Teléfono del Cliente"
                                className="mt-2 block w-full p-3 bg-gray-50"
                            />

                            {errors.phone && touched.phone && <ErrorAlert>{errors.phone}</ErrorAlert>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="notes" className="text-gray-800">
                                Notas
                            </label>

                            <Field
                                as="textarea"
                                id="notes"
                                name="notes"
                                type="text"
                                placeholder="Notas del Cliente"
                                className="mt-2 block w-full p-3 bg-gray-50 h-40 resize-none"
                            />

                            {errors.notes && touched.notes && <ErrorAlert>{errors.notes}</ErrorAlert>}
                        </div>

                        <input
                            type="submit"
                            value={`${client?.name ? "Editar" : "Crear"} Cliente`}
                            className="mt-5 w-full bg-blue-800 p-3 text-white font-bold text-center text-lg hover:cursor-pointer"
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ClientForm;
