import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from './ui/button'


const Blogs = () => {
  return (
    <div>
         <section className="container px-4 py-10 mx-auto mt-10">
  <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">Latest Blogs</h2>
  <br/>
  <Carousel >
    <CarouselContent>
      <CarouselItem className = "basis-1/3">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Blog Image" className="w-full h-48 rounded-lg object-cover" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 1</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.</p>
          <Button variant="outline">Read more</Button>
        </div>
       
  
      </CarouselItem>
      <CarouselItem className = "basis-1/3">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Image" className="w-full h-48 rounded-lg object-cover" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 2</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.</p>
          <Button variant="outline">Read more</Button>
        </div>
      </CarouselItem>
      <CarouselItem className = "basis-1/3">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
          <img src="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0=" alt="Blog Image" className="w-full h-48 rounded-lg object-cover" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 3</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.</p>
          <Button variant="outline">Read more</Button>
        </div>
      </CarouselItem>
      <CarouselItem className = "basis-1/3">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
          <img src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Blog Image" className="w-full h-48 rounded-lg object-cover" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 5</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.</p>
          <Button variant="outline">Read more</Button>
        </div>
      </CarouselItem>
      <CarouselItem className = "basis-1/3">
        <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105">
          <img src="https://media.istockphoto.com/id/1047259374/photo/programming-source-code-abstract-background.jpg?s=2048x2048&w=is&k=20&c=JjAc-lnJXIFeH3Jb25ICSEseUHeGfToOleoJpiHjLGA=" alt="Blog Image" className="w-full h-48 rounded-lg object-cover" />
          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 5</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.</p>
          <Button variant="outline">Read more</Button>
        </div>
      </CarouselItem>
      
      
      
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</section>
    </div>
  )
}

export default Blogs