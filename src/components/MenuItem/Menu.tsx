import React from 'react'
import Image from 'next/image'
import MenuItem from './MenuItem'

const Menu = () => {
  const categories = [
    { id: 1, name: 'Breakfast', active: true },
    { id: 2, name: 'Lunch' },
    { id: 3, name: 'Dinner' },
    { id: 4, name: 'Dessert' },
    { id: 5, name: 'Drink' },
    { id: 6, name: 'Snack' },
    { id: 7, name: 'Soups' },
  ]

  const menuItems = [
    {
      image: '/menu1.jfif',
      title: 'Lettuce Leaf',
      description: 'Lacus nisi, et ac dapibus velit in consequat.',
      price: '12.5'
    },
    {
        image: '/mainCourse.png',
        title: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
      {
        image: '/food3.png',
        title: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
      {
        image: '/food1.png',
        title: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },{
        image: '/food3.png',
        title: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },

      {
        image: '/image1.jfif',
        title: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
      {
        image: '/mask9.png',
        title: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
      {
        image: '/youget.jfif',
        title: 'Lettuce Leaf',
        description: 'Lacus nisi, et ac dapibus velit in consequat.',
        price: '12.5'
      },
    
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#FF9F0D] font-great-vibes text-3xl mb-2">
            Choose & pick
          </h3>
          <h2 className="text-[#FF9F0D] text-6xl font-bold">
            Fr<span className="text-white">om Our Menu</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex justify-between max-w-4xl mx-auto mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`text-xl ${
                category.active 
                  ? 'text-[#FF9F0D] font-bold' 
                  : 'text-white font-normal hover:text-[#FF9F0D] transition-colors'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Image */}
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="w-1/2">
          <Image 
            src="/dinner.png"
            alt="Our Menu"
            width={415}
            height={400}
                className="w-full object-contain"
            />
            </div>
        <div className="grid grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
        </div>

      </div>
    </section>
  )
}

export default Menu;