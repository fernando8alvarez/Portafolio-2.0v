import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toUpperString, toUpperName } from "../../helpers";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import {
    Tittle1,
    Tittle2,
    InputTittle,
    Input,
    Textarea,
    Button,
    Section,
    ContainerTittles,
    ContainerForm,
    Form,
    Errors,
    modalOptions
} from "./Styles";

const serviceId = "service_j7ltabd";
const templateId = "template_91z30wj";
const apiKey = "URmcpNKPoCY3-4bOn"



export default function Contact() {

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const form = useRef();

    const onSubmit = () => {

        emailjs.sendForm(serviceId, templateId, form.current, apiKey)

        Swal.fire(modalOptions).then(() => {
            reset();
        })
    }

    return (
        <Section id="section-5">
            <ContainerTittles id="tittles" data-aos="fade-zoom-in" data-aos-delay="300" data-aos-duration="1000">
                <Tittle1>Contactame</Tittle1>
                <Tittle2>Trabaja conmigo</Tittle2>
            </ContainerTittles>
            <ContainerForm>
                <Form onSubmit={handleSubmit(onSubmit)} ref={form} data-aos="fade-down" data-aos-duration="1000">
                    <div className="flex flex-col md:flex-row w-full gap-3 lg:gap-10">
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <InputTittle htmlFor="name">Nombre</InputTittle>
                            <Input
                                type="name"
                                id="name"
                                placeholder="Tu nombre y apellido"
                                {...register('name', {
                                    required: "El campo nombre es requerido",
                                    onChange: (e) => setValue('name', toUpperName(e.target.value))
                                })}
                            />
                            {errors.name?.type && <Errors className="">{errors.name.message}</Errors>}
                        </div>
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <InputTittle htmlFor="email">Correo</InputTittle>
                            <Input
                                type="email"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                {...register('email', {
                                    required: "El campo email es requerido",
                                    pattern: {
                                        value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-z]{2,7}$/,
                                        message: "El email no es válido"
                                    }
                                })}
                            />
                            {errors.email?.type && <Errors>{errors.email.message}</Errors>}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <InputTittle htmlFor="subject">Asunto</InputTittle>
                        <Input
                            type="text"
                            id="subject"
                            placeholder="Motivo..."
                            {...register('subject', {
                                required: "El campo asunto es requerido",
                                onChange: (e) => setValue('subject', toUpperString(e.target.value))
                            })}
                        />
                        {errors.subject?.type && <Errors>{errors.subject.message}</Errors>}
                    </div>
                    <div className="sm:col-span-2 flex flex-col gap-2">
                        <InputTittle htmlFor="message">Mensaje</InputTittle>
                        <Textarea
                            id="message"
                            rows="6"
                            placeholder="Tu mensaje..."
                            {...register('message', {
                                required: "El campo mensaje es requerido",
                                onChange: (e) => setValue('message', toUpperString(e.target.value))
                            })}

                        ></Textarea>
                        {errors.message?.type && <Errors>{errors.message.message}</Errors>}
                    </div>
                    <div className="w-auto flex justify-end">
                        <Button type="submit">Enviar mensaje</Button>
                    </div>
                </Form>
            </ContainerForm>
        </Section>
    )
}
