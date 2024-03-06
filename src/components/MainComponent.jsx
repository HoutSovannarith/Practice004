import ProductComponent from "./ProductComponent.jsx";
import FeedbackComponent from "./FeedbackComponent.jsx";


const MainComponent = () => {
    return(
        <div className="my-4">
            <h1 className="text-3xl font-bold text-center m-2">Products</h1>
            <ProductComponent/>
            <h1 className="text-3xl font-bold text-center m-2">Feedback</h1>
            <FeedbackComponent/>
        </div>
    )
}
export default MainComponent