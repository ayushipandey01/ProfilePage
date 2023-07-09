import React, { useState, useEffect } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch('https://panorbit.in/api/users.json')
      .then(res => res.json())
      .then(users => {
        // console.log(users);
        // completeData.current = users.users;
        // setIsLoading(false);
        setUsersData(users.users);
        // this.setState({isLoading : false , usersData : users.users})            
      });
  }, [])

  return (
    <div >
      <div className={`chat-cont-open chat-icon ${isOpen ? 'closed' : ''}`} style={isOpen ? { display: "none" } : {}} onClick={toggleChatBox}>
        {/* <div className='chat-cont-open'> */}
        <div className='chat-cont-open'>
          <div>
            <span class="material-icons-outlined">
              chat_bubble_outline
            </span>
          </div>

          <div>Chats</div>
        </div>
        <div>
          <span class="material-icons-outlined">
            expand_less
          </span>
        </div>
        {/* </div> */}



        {/* <img src="chat-icon.png" alt="Chat Icon" /> */}
      </div>

      <div className={`chat-box ${isOpen ? 'open' : ''}`}>
        <div className="chat-hheader">


          <div className='chat-option chat-cont-open' onClick={toggleChatBox} >
            {/* <div className='chat-cont-open'> */}
            <div className='chat-cont-open'>
              <div>
                <span class="material-icons-outlined">
                  chat_bubble_outline
                </span>
              </div>
              <div>Chats</div>
            </div>
            <div>
              <span class="material-icons-outlined">
                expand_more
              </span>
            </div>
            {/* </div> */}
          </div>
          {usersData.map((data) => {
            return (
              <div key={data.id} className="card-chat-container">
                <div className="chat-details">
                  <div className='chat-profile'>
                    <img src={data.profilepicture} />
                    <div className="text-chat">
                      {data.name}
                    </div>
                  </div>

                  <span class={`${data.id & 1 ? "dot grey" : "dot"}`}></span>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
