
import Card from '../Card/Card';

const Cards = ({cards}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 lg:w-[1200px] mx-auto -mt-40">
            {
            cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;
