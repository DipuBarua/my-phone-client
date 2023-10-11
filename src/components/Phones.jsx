import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h3>Total phones: {phones.length}</h3>
            {
                phones.map(phone =>
                    <li key={phone.id}>
                        <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                    </li>)
            }
            <Link to={'/'}>go home</Link>
        </div>
    );
};

export default Phones;