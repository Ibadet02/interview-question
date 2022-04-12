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
        setFilteredData(data)
        console.log(data)
      })
  }, [])

  const handleFilter = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const value = Object.fromEntries(formData.entries())

    setFilteredData(
      data.filter((d) => {
        let filter = true
        if (value.name) {
          filter = d.product[0].name.toLowerCase() === value.name.toLowerCase()
        }

        if (value.date) {
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
      <Container>
        <Row>
          <Col>
            <FilterBar onSubmit={handleFilter} className='mb-4' />
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
