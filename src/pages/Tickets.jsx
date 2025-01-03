

function Tickets() {
  return (
    <div className="py-[25px] px-[60px]">
    <div className="flex  border-2 border-[#EEEEEE]">
      <div className="tickets-left-container w-full">
     
     

      </div>

      <div className="tickets-right-container w-[270px] h-full">

        <div className="tickets-right-container-title">Ticket Information</div>

        <div className="ticket-section">
          <div className="tickets-right-container-sub-title-bold mb-2">Contact Info</div>
          <div className="tickets-right-container-sub-title">Pro trainer</div>
          <div className="tickets-right-container-value">protrainer@support.com</div>
        </div>

        <div className="ticket-section">
          <div className="tickets-right-container-sub-title-bold mb-2">Ticket Owner</div>

          <div className="tickets-right-container-sub-title">Agent Name</div>
          <div className="tickets-right-container-value">Yuki Tanaka</div>

          <div className="tickets-right-container-sub-title">Status</div>
          <div className="tickets-right-container-value">Closed</div>


          <div className="tickets-right-container-sub-title">Closed Date</div>
          <div className="tickets-right-container-value">27th December 2024</div>


        </div>



        <div className="ticket-section">
          <div className="tickets-right-container-sub-title-bold mb-2">Ticket Information</div>

          <div className="tickets-right-container-sub-title">Phone</div>
          <div className="tickets-right-container-value">+91-23456-789</div>

          <div className="tickets-right-container-sub-title">Product Name</div>
          <div className="tickets-right-container-value">Portable Tent </div>

        </div>

        <div className="ticket-section">
          <div className="tickets-right-container-sub-title-bold mb-2">Additional Information</div>

          <div className="tickets-right-container-sub-title">Priority</div>
          <div className="tickets-right-container-value">High</div>


        </div>

  
      </div>
    </div>
    </div>
  )
}

export default Tickets