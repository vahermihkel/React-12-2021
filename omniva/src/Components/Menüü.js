import { Link } from 'react-router-dom';

function Menüü() {
    return (<div>
        <Link to="harju">
            <button>Harjumaa pakiautomaadid</button>
        </Link>
        <Link to="jogeva">
            <button>Jõgevamaa pakiautomaadid</button>
        </Link>
        <Link to="viljandi">
            <button>Viljandimaa pakiautomaadid</button>
        </Link>
        <Link to="parnu">
            <button>Pärnumaa pakiautomaadid</button>
        </Link>
    </div>)
}

export default Menüü;