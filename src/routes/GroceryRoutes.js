import React from 'react'
import GroceryLayout from '../layouts/groceryLayout'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Grocery/Home/home'

function GroceryRoutes() {
  return (
    <GroceryLayout>
        <Routes>
            <Route path = "/"  element = {<Home />}/>
        </Routes>
    </GroceryLayout>
  )
}

export default GroceryRoutes