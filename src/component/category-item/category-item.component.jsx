import {
    BackgroundImage,
    CategoryBodyContainer,
    CatregoryItemContainer
} from './category-item.styles';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <CatregoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage
                imageurl={imageUrl}
            />
            <CategoryBodyContainer>
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CatregoryItemContainer>
    );
}

export default CategoryItem;


