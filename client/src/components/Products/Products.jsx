import "./Products.scss";
import Product from "./Product/Product";
const Products = ({products, innerPage, headingText}) => {
    return <div className="products-container">
        {!innerPage && <div className="section-heading">{headingText}</div>}
        <div className="products">
            {/* ? -> optional chaining operator, allows us to safely access properties
            or call methods on potential null or undefined values without
            throwing error */}
            {products?.data?.map((item) => (
                <Product
                    key={item.id}
                    id={item.id}
                    data={item.attributes}
                />
            ))}
            
        </div>
    </div>;
};

export default Products;
