import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Menu, DataTable, FilterBar, BarChart } from './components/'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [isFiltered, setIsfiltered] = useState(false)

  useEffect(() => {
    fetch('https://assignment-6fdaf-default-rtdb.firebaseio.com/orders.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  const handleFilter = (event) => {
    event.preventDefault()
    // console.log(event.target)
    const formData = new FormData(event.target)
    // console.log(formData.entries())
    const value = Object.fromEntries(formData.entries())
    // console.log(data)
    setFilteredData(
      data.filter((d) => {
        // console.log(new Date(d.date).toLocaleDateString())
        let filter = true
        if (value.name) {
          filter = d.product[0].name.toLowerCase() === value.name.toLowerCase()
        }
        if (value.date) {
          // let apiTime = new Date(d.date).toLocaleDateString()
          // let userTime = new Date(value.date).toLocaleDateString()
          // filter = filter && apiTime === userTime
          filter = filter && new Date(d.date).toLocaleDateString() === new Date(value.date).toLocaleDateString()
        }
        if (value.amount) {
          filter = filter && d.amount === Number(value.amount)
        }
        return filter
      })
    )

    setIsfiltered(value.name !== '' || value.amount !== '' || value.date !== '')
  }

  return (
    <div className='App'>
      <Menu className='mb-4' />
      <Container fluid>
        <Row>
          <Col>
            <FilterBar onSubmi={handleFilter} className='mb-4' />
            <DataTable data={isFiltered ? filteredData : data} />
          </Col>
          <Col>
            <BarChart data={isFiltered ? filteredData : data} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
