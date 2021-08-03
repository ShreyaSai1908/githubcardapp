import Card from './Card';

function  CardList (props) {
    return(
        <div>{props.cards.map(card => <Card {...card} />)}</div>
    ) 

}

export default CardList;