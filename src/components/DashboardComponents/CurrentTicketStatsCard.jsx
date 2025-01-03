/* eslint-disable react/prop-types */

function CurrentTicketStatsCard({ value, label }) {
    return (
        <div className='min-w-[130px] p-3 '>
            <div className='current-ticket-stats-value'>
                {value}
            </div>
            <div className='current-ticket-stats-label'>
                {label}
            </div>
        </div>
    );
}

export default CurrentTicketStatsCard;
