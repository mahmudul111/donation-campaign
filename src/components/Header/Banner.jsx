

const Banner = () => {
    return (
        <div>
            <div className="mt-10 backdrop:-brightness-200 ">
            <img className="h-[60vh] lg:w-[1240px] mx-auto opacity-10 block" src="https://i.ibb.co/L8tZkXk/banner.jpg" alt="" />
        </div>
        <div className="relative bottom-72 text-center lg:text-3xl font-bold">
            <h2 className="">I Grow By Helping People In Need</h2>
            <div className="mt-24 items-center relative">
                <input className="border-solid border-2 border-gray-600 py-1" type="text" />
                <button className="text-2xl py-2 px-3 bg-red-500 rounded-r-lg absolute -bottom-0">Search</button>
            </div>
         
        </div>
        </div>
    );
};

export default Banner;