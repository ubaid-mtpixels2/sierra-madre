
import ComboBarGraph from '../components/charts/ComboChart'
import CurrentTicketStatsCard from '../components/DashboardComponents/CurrentTicketStatsCard'
import DashboardTicketsCard from '../components/DashboardComponents/DashboardTicketsCard'
import backlogAverageIcon from '../assets/icons/dashboard-icons/backlog-averge-icon.svg'
import closedTicketsTotal from '../assets/icons/dashboard-icons/closed-tickets-total.svg'
import TrafficAnalysis from '../components/DashboardComponents/TrafficAnalysis'
import CustomerHappinessRating from '../components/DashboardComponents/CustomerHappinessRating'
import AverageTicketReplyTime from '../components/DashboardComponents/AverageTicketReplyTime'

function Dashboard() {
  return (
    <div className='p-8'>
      {/* CURRENT TICKET STATS */}
      <div className='flex gap-[20px] w-full align-items-center justify-between'>
        <div className='text-2xl font-bold flex items-center'>
          Current Ticket Stats
        </div>
        <CurrentTicketStatsCard value={10} label='Total Tickets'></CurrentTicketStatsCard>
        <CurrentTicketStatsCard value={5} label='Open Tickets'></CurrentTicketStatsCard>
        <CurrentTicketStatsCard value={5} label='Closed Tickets'></CurrentTicketStatsCard>
        <div>
          
        </div>

      </div>

      <ComboBarGraph></ComboBarGraph>


      <div className='flex my-8 justify-between gap-7'>
        <DashboardTicketsCard label='New Tickets Total' value={496}></DashboardTicketsCard>
        <DashboardTicketsCard imgUrl={closedTicketsTotal} label='Closed Tickets Total' value={321}></DashboardTicketsCard>
        <DashboardTicketsCard imgUrl={backlogAverageIcon} label='backlog Average' value={37}></DashboardTicketsCard>
      </div>

      <div className='flex my-8 justify-between gap-7'>

        <TrafficAnalysis></TrafficAnalysis>
        <CustomerHappinessRating />
        <AverageTicketReplyTime />
      </div>
    </div>
  )
}

export default Dashboard