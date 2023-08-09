
import { useEffect, useState } from "react";

import { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service";

export function AdminHome() {
  
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findLoggedUser()
      .then(response => {
        setUser(response.data);
        console.log(response.data)
      })
  }, []);

  return (
    <main>
      <section className="dsc-container">
        <h2 className="dsc-section-title dsc-mb-20">Dashboard</h2>
        <h4>Usuário logado: {user?.id} - {user?.name}</h4>
      </section>
    </main>
  )
}