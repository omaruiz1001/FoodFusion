import { useAuth0 } from "@auth0/auth0-react"

export const LogoutButton = () => {

  const {logout} = useAuth0()

  return (
    <div className="section-containers">
      <button className="btn btn-outline-success width"  onClick={()=>logout()}>
        Logout
      </button>
    </div>
  )
}
