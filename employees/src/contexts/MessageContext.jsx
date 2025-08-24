import React, { createContext, useContext, useState } from "react";
import { dummyMessages, dummyConversations } from "../utils/dummyUsers";

const MessageContext = useContext();

const MessageProvider = ({ children }) => {

    const [messages, setMessages] = useState(dummyMessages);
    const [conversations, setConversations] = useState(dummyConversations);
    const [selectedConverstion, setSelectedConversation] = useState(null);

    const getMessagesByConversationId = (conversationId) => {
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.conversationId === conversationId));
    };

    const addMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, { id: `msg${prevMessages.length + 1}`, ...newMessage }]);
    };


    value = {
        conversations,
        messages,
        selectedConverstion,
        setSelectedConversation,
        getMessagesByConversationId,
        addMessage
    }

    return (
        <MessageProvider.Provider value={value}>
            {children}
        </MessageProvider.Provider>
    )
};


export const useMessage = () => {
    return useContext(MessageContext);
}