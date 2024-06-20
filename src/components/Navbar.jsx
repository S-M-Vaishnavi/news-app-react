
// eslint-disable-next-line react/prop-types
const Navbar = ({ setCategory,setLang,setQ,setSearchBtn }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchBtn((prev) => !prev); // Toggle searchBtn to trigger useEffect in NewsBoard
      };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News App</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("science")}>Science</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item" style={{ cursor: "pointer" }}>
                            <div className="nav-link" onClick={() => setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item dropdown" style={{ cursor: "pointer" }}>
                            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Languages
                            </div>
                            <ul className="dropdown-menu">
                                <li><div className="dropdown-item" onClick={()=>setLang("ta")}>Tamil</div></li>
                                <li><div className="dropdown-item" onClick={()=>setLang("hi")}>Hindi</div></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><div className="dropdown-item" onClick={()=>setLang("en")}>English</div></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search"  onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setQ(e.target.value)}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
