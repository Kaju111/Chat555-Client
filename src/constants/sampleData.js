export const sampleChats = [
  {
    avatar: [
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    ],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    ],
    name: "John Boi",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: [
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    ],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: [
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    ],
    name: "John Boi",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      name: "John Boi",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Biki message",
    _id: "fsdsfdsrdsfd",
    sender: {
      _id: "user._id",
      name: "Biki",
    },
    chat: "chatId",
    createdAt: "2024-02-29T00:00:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "oaknla 2",
        url: "https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg",
      },
    ],
    content: "",
    _id: "fsdsfdsrdsfdaa",
    sender: {
      _id: "jjkjajkskaj",
      name: "Biki",
    },
    chat: "chatId",
    createdAt: "2024-02-29T00:00:00.000Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar:
        "https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar:
        "https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg",
      _id: "2",
      username: "john_boi",
      friends: 21,
      groups: 25,
    },
  ],
  chats: [
    {
      name: "John Groups",
      avatar: [
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      ],
      _id: "1",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
        },
        {
          _id: "2",
          avatar:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Dor",
        avatar:
          "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      },
    },
    {
      name: "John Groups",
      avatar: [
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      ],
      _id: "2",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
        },
        {
          _id: "2",
          avatar:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Jony Dor",
        avatar:
          "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Biki message",
      _id: "fsdsfdsrdsfd",
      sender: {
        avatar:
          "https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg",
        name: "Biki",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-29T00:00:00.000Z",
    },
    {
      attachments: [
        {
          public_id: "oaknla 2",
          url: "https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg",
        },
      ],
      content: "",
      _id: "fsdsfdsrdsfdaa",
      sender: {
        avatar:
          "https://miro.medium.com/v2/resize:fit:600/1*NZ1j7rFDmd1jg5zFyYPcDg.jpeg",
        name: "Biki",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-29T00:00:00.000Z",
    },
  ],
};
