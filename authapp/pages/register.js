import Head from 'next/head'
import Layout from '../layout/layuot'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import { HiAtSymbol,HiFingerPrint,HiEyeOff,HiEye,HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';

export default function Register() {
    
    const[show,setshow]= useState({password: false, cpassword: false})

    return (
        <Layout>
            <Head>
                <title>Login PPC games</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">
                        ¡CREA TU CUENTA Y COMIENZA A JUGAR!
                    </h1>
                    <p className="w-3/4 mx-auto text-gray-400">
                        Si no has creado una cuenta,
                    </p>
                    <p className="text-black text-xl">
                        ¡¡¡Crea una cuenta!!!
                    </p>
                </div>

                {/* form */}

                {/* Space text */}
                <form className="flex flex-col gap-5">
                    <div className={styles.input_group}>
                        <input 
                            type="usermane" 
                            name="username" 
                            placeholder="Nombre de usuario"
                            className={styles.input_text} 
                        /> 
                        <span className='icon flex items-center px-4'> 
                            <HiOutlineUser size={25} /> 
                        </span> 
                    </div> 

                    <div className={styles.input_group}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Correo electrónico"
                            className={styles.input_text} 
                        />
                        <span className='icon flex items-center px-4'> 
                            <HiAtSymbol size={25} /> 
                        </span> 
                    </div> 





                    <div className={styles.input_group}> 
                        <input 
                            type={`${show ? "text": "password"}`}  
                            name="password"
                            placeholder="Contraseña"
                            className={styles.input_text}
                        />
                    </div>

                    <div className={styles.input_group}> 
                        <input 
                        type={`${show ? "text": "password"}`}  
                        name="cpassword" 
                        placeholder="Confirmar Contraseña"
                        className={styles.input_text}
                        />
                    </div>
                    <div className={styles.password_button} onClick={() => setshow(!show)}>
                        Ver Contraseña
                    </div>
                    {/* Bottom Iniciar Sessión */}
                    <div className="input-buttom">
                        <button type='submit' className={styles.button}>
                            Iniciar sesión
                        </button>
                    </div>
                    {/* bottom */}
                    <p className="text-center text-gray-400">Si ya has creado una cuenta </p>
                    <p className="text-center text-blue-400"><Link href='/login'>Login</Link> </p>
                </form>
            </section>
        </Layout>
    );
}
