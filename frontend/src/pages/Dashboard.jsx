import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { UserComponent } from "../components/UserComponent"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <Balance value={22093} />
        <UserComponent />
    </div>  
}

