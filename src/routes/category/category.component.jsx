import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../component/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoryMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoryMap[category]);

    useEffect(() => {
        setProducts(categoryMap[category]);
    }, [category, categoryMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </Fragment>
    );
}

export default Category;