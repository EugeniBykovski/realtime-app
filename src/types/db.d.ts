export interface User {
  name: string;
  email: string;
  image: string;
  id: string;
}

export interface Chat {
  id: string;
  messages: Message[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: number;
}

export interface FriendRequest {
  id: string;
  senderId: string;
  receiverId: string;
}
