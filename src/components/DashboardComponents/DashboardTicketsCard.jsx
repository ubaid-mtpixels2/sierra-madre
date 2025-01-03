/* eslint-disable react/prop-types */

function DashboardTicketsCard({ imgUrl, label, value }) {
    return (
        <div className='min-w-[330px] p-3 flex justify-between dashboard-card-container w-full'>
            <div>
                <div className='current-ticket-stats-value'>
                    {value}
                </div>
                <div className='current-ticket-stats-label'>
                    {label}
                </div>
            </div>
            <div>
                { imgUrl && <img src={imgUrl} alt="" className="max-w-[72px]" /> }
            </div>
        </div>
    )
}

export default DashboardTicketsCard