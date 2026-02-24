import './card.css'

function Description({children}){
    return <p className="description">{children}</p>
}
function Category({children}){
    return <p className="category">{children}</p>
}

export default function Card({title, price, image, description, category}){
    return (
        <article>
            <img src={image} alt={title}/>
            <Description>{description}</Description>
            <Category>{category}</Category>
            <p>{price}</p>
        </article>
    )
}
