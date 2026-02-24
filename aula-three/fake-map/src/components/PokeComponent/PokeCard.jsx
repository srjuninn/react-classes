export default function PokemoonGu({image, name, type}){
    return(
        <article>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{type}</p>
        </article>
    )
}