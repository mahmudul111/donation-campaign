import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center max-w-screen-xl px-5 shadow-xl py-5 mx-auto">
            <div>
                <img src="https://i.ibb.co/68j6g7f/Logo.png" alt="" />
                </div>
            <div>
                <ul className="flex gap-5">
                    <li>
                    <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-xl" : ""
                    }
                    >
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-xl" : ""
                    }
                    >
                    Donation
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 underline font-semibold text-xl" : ""
                    }
                    >
                    Statistics
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;