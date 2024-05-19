export const Balance = ({ value }) => {
    return <div className="flex">
        <div className="font-bold text-lg ml-4 mt-4">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg mt-4">
            Rs {value}
        </div>
    </div>
}