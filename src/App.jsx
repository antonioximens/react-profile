import Profile from "./componets/Profile"

export default function App() {
  
  return (
    <div className="app">
      <Profile
          avatar="https://i.pinimg.com/originals/a5/7a/4b/a57a4bb2e7ddd2b4ee30271b2d989cc1.jpg" 
          name="John Doe" 
          bio="Full-stack javascript developer at Acne Inc."
          email="john.doe@gmail.com.ber"
          phone="+55987564123"
          githubUrl="https://github.com"
          linkedinUrl="https://linkedin.com"
          twitterUrl="https://twitter.com"
      />
    </div>
  )
}

