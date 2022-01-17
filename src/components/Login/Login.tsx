/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import Button from '../Atoms/Button'
import Input from '../Atoms/Input'

import styles from './Login.module.css'

export default function Login() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className={`hidden md:flex justify-center items-center ${styles.BackgroundImage} bg-cover bg-bottom h-100`}>
        <div className={` flex justify-center items-center h-full `}>
            <h1 className="text-4xl font-bold text-[#FC9418] text-center mx-5">
              Tu ingreso a la Universidad es nuestro Objetivo
            </h1>
        </div>
      </div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://umachay.net/wp-content/uploads/2020/11/logo-con-texto.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Inicie sesión en su cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                to="/signup"
                className="font-medium text-[#ff7429] hover:text-[#E81946]"
              >
                Inicia la prueba de 14 días
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                id="email-address"
                label="Correo electrónico"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="rounded-t-md"
              />
              <Input
                id="email-address"
                label="Contraseña"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-b-md"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#ff7429] focus:ring-[#ff7429] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Recuérdame
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#ff7429] hover:text-[#E81946]"
                >
                  ¿Olvidate tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <Button>iniciar Sesión</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
