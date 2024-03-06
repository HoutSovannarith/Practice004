import FeedbackCard from "./FeedbackCard.jsx";

const FeedbackComponent = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeedbackCard/>
            <FeedbackCard/>
            <FeedbackCard/>
        </div>
    )
}
export default FeedbackComponent;