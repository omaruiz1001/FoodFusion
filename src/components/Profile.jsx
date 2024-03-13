import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react";

export const Profile = () => {

  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="section-containers d-flex align-items-center">
    {isAuthenticated && (
      <div className="text-dark">
      {user.name}  
    </div>
      )}
    </div>
  )
}
