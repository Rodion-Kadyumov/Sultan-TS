import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { Route, Routes } from 'react-router-dom'
import {store } from '../store/redux'
import  Basket  from '../Pages/Basket/Basket'
import  Catalog  from '../Pages/Catalog/Catalog'
import  Detail  from '../Pages/Detail/ProductDetail'

describe('TEST Router', () => {
  test('Link basket', async () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Routes>
            <Route path='/' element={<Catalog />} />
            <Route path='basket' element={<Basket />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )
    const baskets = screen.getAllByTestId('basket-link')
    fireEvent.click(baskets[0])
    const page = await screen.findByTestId('basket-page')
    expect(page).toBeInTheDocument()
  })

  test('Link product',  async () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Routes>
            <Route path='/' element={<Catalog />} />
            <Route path='product/:productId' element={<Detail />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )
    const products = await screen.findAllByTestId('product-item')
    fireEvent.click(products[0])
    await waitFor(() => {
      const page = screen.getByTestId('product-page')
      expect(page).toBeInTheDocument()
    })
  })

  test('Link admin', async () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <Routes>
            <Route path='/' element={<Catalog />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )
    const adminLink = await screen.findByTestId('admin-link')
    fireEvent.click(adminLink)
    const page = await screen.findByTestId('admin-page')
    expect(page).toBeInTheDocument()
  })
})