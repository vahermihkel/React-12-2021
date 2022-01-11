import { Link } from "react-router-dom";

function AdminHome() {
    return (
    <div>
        <Link to="/admin/lisa-toode">
            <button>Lisa toode</button>
        </Link>
    </div>)
}

export default AdminHome;