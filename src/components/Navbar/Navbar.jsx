

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark color-navb">
            <div className="container">
                {/* {{!-- < a className="navbar-brand" href="/">Wonder Places</> --}} */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/perfil"> <b>ALERTAS</b> </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/alojamientos"> <b>ACOGE</b> </a>
                        </li>
                        <a className="nav-link" href="/"> <img src='/images/logo.png' width="300" height="50" alt=""/></a>
                        <li className="nav-item">
                            <a className="nav-link" href="/reservas"><b>ADOPTA</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register" tabindex="-1" aria-disabled="true"><b>Register</b></a>
                        </li>

                        <a className="btn btn-outline-success" type="submit" href="/login">Login</a>


                    </ul>
                </div>
            </div>
        </nav >
    )
}