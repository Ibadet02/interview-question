import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export const FilterBar = ({ onSubmi }) => {
  return (
    <form onSubmit={onSubmi}>
      <InputGroup>
        <FormControl name='name' placeholder='Search Product' />
        <FormControl name='amount' placeholder='Enter order amount' />
        <FormControl name='date' type='date' placeholder='Select Date' />
        <Button type='submit' variant='primary'>
          Filter
        </Button>
      </InputGroup>
    </form>
  )
}
