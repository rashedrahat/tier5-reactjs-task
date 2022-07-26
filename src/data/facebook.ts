const data = {
  user: {
    username: "joe",
    name: "Joe",
    profilePicture: "https://minimaltoolkit.com/images/randomdata/male/38.jpg",
  },
  posts: [
    {
      id: "8402678390264947304",
      user: {
        username: "adam",
        name: "Adam",
        profilePicture:
          "https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg",
      },
      postedOn: "1658850163945",
      description: "I feel over the moon!",
      image:
        "https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/4:3/w_3556,h_2667,c_limit/Eiffel-Tower_GettyImages-1060266626.jpg",
      likes: 25,
      liked: true,
      comments: [
        {
          text: "What a view Man!",
          createdAt: "1658850716230",
          user: {
            username: "jhonson",
            name: "Jhonson William",
            profilePicture:
              "https://minimaltoolkit.com/images/randomdata/male/2.jpg",
          },
        },
        {
          text: "🤘🤘🤘",
          createdAt: "1658850656555",
          user: {
            username: "charlie",
            name: "Charlie",
            profilePicture:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCS56Gx44-w-wX86Hr_iH0zBvi_cia40AhLE29fSG2OpqaDZahWIuFP2_qCQWjZn_rTJg&usqp=CAU",
          },
        },
        {
          text: "Love the view 💖",
          createdAt: "1658850534168",
          user: {
            username: "jacob",
            name: "Jacob",
            profilePicture:
              "https://images.squarespace-cdn.com/content/v1/5dfb51321047cf33eb90b6df/1581602814946-NLSD2Y3725ASHPBDEFQ2/Nick-MyHeartSkipped-1948.jpg",
          },
        },
        {
          text: "Wow! Love n like it.",
          createdAt: "1658850255942",
          user: {
            username: "Olivia",
            name: "Olivia Lily",
            profilePicture:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
          },
        },
      ],
    },
    {
      id: "8402678390264947303",
      user: {
        username: "Olivia",
        name: "Olivia Lily",
        profilePicture:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      postedOn: "1658849496689",
      description: "What a beautiful flower it is! Isn't it?",
      image:
        "https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659__340.jpg",
      likes: 10,
      liked: true,
      comments: [
        {
          text: "Nice flower.",
          createdAt: "1658849846346",
          user: {
            username: "jhonson",
            name: "Jhonson William",
            profilePicture:
              "https://minimaltoolkit.com/images/randomdata/male/2.jpg",
          },
        },
        {
          text: "Yeah really beautiful the flower!",
          createdAt: "1658849695424",
          user: {
            username: "harry",
            name: "Harry",
            profilePicture:
              "https://www.amnesty.org.uk/files/2019-05/262190.jpg?VersionId=11H3qzUuP1d_cDynWng75b1M7mlXug4M",
          },
        },
      ],
    },
    {
      id: "8402678390264947304",
      user: {
        username: "jhonson",
        name: "Jhonson William",
        profilePicture:
          "https://minimaltoolkit.com/images/randomdata/male/2.jpg",
      },
      postedOn: "1658470925106",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "",
      likes: 5,
      liked: false,
      comments: [],
    },
    {
      id: "8402678390264947305",
      user: {
        username: "joe",
        name: "Joe",
        profilePicture:
          "https://minimaltoolkit.com/images/randomdata/male/38.jpg",
      },
      postedOn: "1658470925106",
      description: "Another 💯",
      image:
        "https://superstarsbio.com/wp-content/uploads/2019/11/Steven-Smith-.jpg",
      likes: 42,
      liked: false,
    },
  ],
  friends: {
    request: [
      {
        username: "oliver",
        name: "Oliver",
        profilePicture:
          "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg",
        numOfMutualFrnd: 6,
      },
      {
        username: "jack",
        name: "Jack Kyle",
        profilePicture:
          "https://media.istockphoto.com/photos/funny-man-smiling-with-tea-wearing-porkpie-hat-picture-id155074191?k=20&m=155074191&s=612x612&w=0&h=nP-Z-vokKNKyc9PZXJ4x9v9TL9KiG0mCTQGVdi8aXHg=",
        numOfMutualFrnd: 1,
      },
      {
        username: "connor",
        name: "Connor",
        profilePicture:
          "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        numOfMutualFrnd: 5,
      },
      {
        username: "thomas",
        name: "George Reece",
        profilePicture:
          "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
        numOfMutualFrnd: 1,
      },
      {
        username: "jack",
        name: "Jack Kyle",
        profilePicture:
          "https://media.istockphoto.com/photos/funny-man-smiling-with-tea-wearing-porkpie-hat-picture-id155074191?k=20&m=155074191&s=612x612&w=0&h=nP-Z-vokKNKyc9PZXJ4x9v9TL9KiG0mCTQGVdi8aXHg=",
        numOfMutualFrnd: 1,
      },
      {
        username: "alex",
        name: "Alex",
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn-IqYDS1gVYjILeEfkQkjgJFlOAXw0aORUm3q4jzTsbRQjbFAcXm3pbolyhkhV1Qk3M&usqp=CAU",
        numOfMutualFrnd: 5,
      },
      {
        username: "connor",
        name: "Connor",
        profilePicture:
          "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80",
        numOfMutualFrnd: 5,
      },
    ],
    online: [
      {
        username: "adam",
        name: "Adam",
        profilePicture:
          "https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg",
        numOfMutualFrnd: 15,
      },
      {
        username: "charlie",
        name: "Charlie",
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCS56Gx44-w-wX86Hr_iH0zBvi_cia40AhLE29fSG2OpqaDZahWIuFP2_qCQWjZn_rTJg&usqp=CAU",
        numOfMutualFrnd: 5,
      },
      {
        username: "jacob",
        name: "Jacob",
        profilePicture:
          "https://images.squarespace-cdn.com/content/v1/5dfb51321047cf33eb90b6df/1581602814946-NLSD2Y3725ASHPBDEFQ2/Nick-MyHeartSkipped-1948.jpg",
        numOfMutualFrnd: 1,
      },
    ],
  },
};

export default data;
