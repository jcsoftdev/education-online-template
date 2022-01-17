import { Link } from "react-router-dom"
import Button from "../Atoms/Button"
import Input from "../Atoms/Input"

const Signup = () => {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://umachay.net/wp-content/uploads/2020/11/logo-con-texto.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Crea tu cuenta
            </h2>
           
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Input
                id="name"
                label="Nombres"
                name="name"
                type="string"
                required
                className="rounded mb-3"
              />
              <Input
                id="name"
                label="Apellidos"
                name="name"
                type="string"
                required
                className="rounded mb-3"
              />
              <Input
                id="name"
                label="Correo Electrónico"
                name="name"
                type="email"
                required
                className="rounded mb-3"
              />
              <Input
                id="password"
                label="Contraseña"
                name="password"
                type="password"
                required
                className="rounded mb-3"
              />
              <Input
                id="dni"
                label="DNI"
                name="dni"
                type="string"
                required
                className="rounded mb-3"
              />
              <Input
                id="cellphone"
                label="Celular"
                name="cellphone"
                type="string"
                required
                className="rounded mb-3"
              />

            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
              
              <span>¿ya tienes una cuenta? </span>
              <Link
                to="/signup"
                className="font-medium text-[#ff7429] hover:text-[#E81946]"
              >
                Iniciar Sesión
              </Link>
            </p>
            <div>
              <Button>
                Registrarme 
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
