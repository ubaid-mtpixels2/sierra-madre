import Button from "../components/presentation/Button"
import postiveRating from "../assets/icons/tickets-icons/positive-rating.svg"
import negativeRating from "../assets/icons/tickets-icons/negative-rating.svg"

function Tickets() {
  return (
    <div className="py-[25px] px-[60px]">
      <div className="flex  border-2 border-[#EEEEEE]">
        <div className="tickets-left-container w-full flex flex-col">

          {/* Tabs  */}
          <div>
            Conversation
          </div>

          {/* Chat Container */}
          <div className="chat-container h-full flex flex-col gap-3">

            <div className="chat-message-container h-full overflow-y-auto">

            </div>

            <div className="chat-message-input-container">
              Thank you for reaching out to us! Id be happy to assist you with your inquiry about [Product Name].Thank you for reaching out to us! I'd be happy to assist you with your inquiry about [Product Name].
            </div>

            <div className="flex justify-between items-center">
              <div>
                Rating 
                <img className="inline-block mx-2" src={postiveRating} alt="" />
                <img className="inline-block" src={negativeRating} alt="" />
              </div>
              <div className="flex gap-3">
                <Button type='primary' label='Regenerate' />
                <Button type='secondary' label='Regenerate' />
              </div>
            </div>
          </div>


        </div>

        <div className="tickets-right-container w-[270px] h-full">

          <div className="tickets-right-container-title">Ticket Information</div>

          <div className="ticket-section">
            <div className="tickets-right-container-sub-title-bold ">Contact Info</div>
            <div className="tickets-right-container-sub-title">Pro trainer</div>
            <div className="tickets-right-container-value">protrainer@support.com</div>
          </div>

          <div className="ticket-section">
            <div className="tickets-right-container-sub-title-bold ">Ticket Owner</div>

            <div className="tickets-right-container-sub-title">Agent Name</div>
            <div className="tickets-right-container-value">Yuki Tanaka</div>

            <div className="tickets-right-container-sub-title">Status</div>
            <div className="tickets-right-container-value">Closed</div>


            <div className="tickets-right-container-sub-title">Closed Date</div>
            <div className="tickets-right-container-value">27th December 2024</div>


          </div>



          <div className="ticket-section">
            <div className="tickets-right-container-sub-title-bold ">Ticket Information</div>

            <div className="tickets-right-container-sub-title">Phone</div>
            <div className="tickets-right-container-value">+91-23456-789</div>

            <div className="tickets-right-container-sub-title">Product Name</div>
            <div className="tickets-right-container-value">Portable Tent </div>

          </div>

          <div className="ticket-section">
            <div className="tickets-right-container-sub-title-bold ">Additional Information</div>

            <div className="tickets-right-container-sub-title">Priority</div>
            <div className="tickets-right-container-value">High</div>


          </div>


        </div>
      </div>
    </div>
  )
}

export default Tickets