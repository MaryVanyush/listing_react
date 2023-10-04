import './Listing.css'
import { itemsModel}  from '../../models/itemsModel'

export const Listing = ({ items }: {items: itemsModel[]}) => {

    return ( <div className="item-list">{items.map(item => <ListItem item = {item}  key ={item.listing_id}/>)}</div>
    );
};

const ListItem = ({ item }: {item: itemsModel}) => {
    const url = typeof item.MainImage === 'object' && 'url_570xN' in item.MainImage ? item.MainImage.url_570xN : '';
    if(url === '') return;

    const checkStocK = () => {
        return item.quantity < 10 ? "level-low" : item.quantity < 20 ? "level-medium" : "level-high";
    }

    const checkCurrency = () => {
        return item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? String.fromCharCode(8364) : item.currency_code;
    }

    return (
        <>
            <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={url} className="item-img" alt="product appearance"/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">
                {item.price} {checkCurrency()}
                </p>
                <p className={`item-quantity ${checkStocK()}`}>{item.quantity} left</p>
            </div>
            </div>
        </>
    )
    
}
