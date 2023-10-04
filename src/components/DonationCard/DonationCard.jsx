

const DonationCard = ({card}) => {
    console.log(card)
    const {image, category, title, amount} = card || {}
    return (
    <div className="flex items-center gap-5 rounded-md bg-slate-200">
        <div>
        <img className="rounded-md" src={image} alt="" />
        </div>
        <div>
            <h3 className="text-lg font-semibold mt-2">{category}</h3>
            <h5 className="text-xl font-bold mt-2">{title}</h5>
            <h5 className="text-xl font-semibold mt-2">{amount}</h5>
            <button className="text-xl text-white bg-red-500 rounded-md py-1 px-3 mt-3">View More</button>
        </div>
    </div>


        
        );
};

export default DonationCard;