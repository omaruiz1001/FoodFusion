import { useAuth0 } from "@auth0/auth0-react";
export const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="section-containers">
      <button onClick={()=>loginWithRedirect()} className="btn btn-outline-success width">Ingresa</button>
    </div>
  )
}
