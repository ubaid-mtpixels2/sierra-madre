function AverageTicketReplyTime() {
  const data = [
    { label: 'First Response Time', time: '7:18', value: 40, color: '#6786CC' },
    { label: 'Response Time', time: '12:18', value: 60, color: '#465E95' },
    { label: 'Resolution Time', time: '17:00', value: 85, color: '#31446F' },
  ];

  return (
    <div className="w-full">
      <div className="dashboard-card-label">Average Ticket Reply Time</div>
      <div className="flex flex-col gap-4 dashboard-card-container">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Label with fixed width */}
            <div className="text-sm font-medium w-1/3">{item.label}</div>

            {/* Progress Bar */}
            <div className="relative flex-1 h-3 rounded-full bg-gray-200">
              <div
                className="absolute top-0 left-0 h-3 rounded-full"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>

            {/* Time */}
            <div className="text-sm font-medium w-16 text-right">{item.time}</div>
          </div>
        ))}

        {/* Bottom scale with dotted line */}
        <div className="relative mt-4 text-xs text-gray-500">
          <div className="flex justify-between">
            <span>0</span>
            <span>60 Mins</span>
          </div>
          <div
            className="absolute top-1/2 left-0 w-full border-t border-dotted border-gray-400"
            style={{ transform: 'translateY(-50%)' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AverageTicketReplyTime;
