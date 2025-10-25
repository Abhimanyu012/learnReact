
const App = () => {
  
  const collegData = [{
    name: "Saitm",
  }, {
    name: "IIT Delhi"
  }, {
    name: "NIT Patna"
  }, {
    name: "IIT Ropar"
  }
  ]
  return (
    <div className='bg-red-500 h-screen p-6'>
      {collegData.map((data, id) => (
        <p key={id} className='text-white text-xl'>
          {data.name}
        </p>
      ))}
    </div>
  )
}

export default App