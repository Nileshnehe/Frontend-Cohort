import React from 'react'
import Card from './components/card'
// import Button from './components/Button'

const App = () => {
  
  const users = [
  {
    name: "Ajay Sharma",
    title: "Frontend Developer",
    profile: "https://randomuser.me/api/portraits/men/11.jpg",
    likeCount: 1200,
    postCount: 45,
    viewCount: 18500,
    followed: true
  },
  {
    name: "Neha Verma",
    title: "UI/UX Designer",
    profile: "https://randomuser.me/api/portraits/women/21.jpg",
    likeCount: 980,
    postCount: 38,
    viewCount: 14200,
    followed: false
  },
  {
    name: "Rohit Patil",
    title: "Backend Engineer",
    profile: "https://randomuser.me/api/portraits/men/32.jpg",
    likeCount: 1560,
    postCount: 60,
    viewCount: 23100,
    followed: true
  },
  {
    name: "Sneha Kulkarni",
    title: "Software Tester",
    profile: "https://randomuser.me/api/portraits/women/44.jpg",
    likeCount: 670,
    postCount: 29,
    viewCount: 9800,
    followed: false
  },
  {
    name: "Amit Deshmukh",
    title: "Full Stack Developer",
    profile: "https://randomuser.me/api/portraits/men/53.jpg",
    likeCount: 2100,
    postCount: 72,
    viewCount: 30500,
    followed: true
  },
  {
    name: "Pooja Singh",
    title: "Content Creator",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
    likeCount: 3400,
    postCount: 120,
    viewCount: 89000,
    followed: true
  },
  {
    name: "Karan Mehta",
    title: "React Developer",
    profile: "https://randomuser.me/api/portraits/men/71.jpg",
    likeCount: 1450,
    postCount: 50,
    viewCount: 21400,
    followed: false
  },
  {
    name: "Anjali Rao",
    title: "Product Manager",
    profile: "https://randomuser.me/api/portraits/women/78.jpg",
    likeCount: 890,
    postCount: 34,
    viewCount: 12600,
    followed: false
  },
  {
    name: "Vikas Yadav",
    title: "DevOps Engineer",
    profile: "https://randomuser.me/api/portraits/men/84.jpg",
    likeCount: 1320,
    postCount: 41,
    viewCount: 19700,
    followed: true
  },
  {
    name: "Riya Malhotra",
    title: "Tech Blogger",
    profile: "https://randomuser.me/api/portraits/women/90.jpg",
    likeCount: 4200,
    postCount: 150,
    viewCount: 102000,
    followed: true
  }
];

  return (
    <div className='px-10 py-10 bg-black full-screen flex flex-wrap gap-6'>
      {users.map((elem, index)=> (
        <Card key={index} user={elem}  />
      ))}

      
      
    </div>
  )
}

export default App