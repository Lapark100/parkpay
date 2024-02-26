export default function Services ({data}) {
return (
    <>
        {data.map((service) => {
            const {id,description,title,image} = service;
            return (
                <div key={id} className="card-container">
                <div className="card-details">
                {image}
                <h3 className="card-title">{title}</h3>
                <p className="card-des">{description}</p>
                </div>
                </div>
            )
        })}
    </>
)
}