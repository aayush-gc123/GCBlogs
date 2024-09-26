"use client"
import Blogs from "@/components/blogs";
import Typed from 'typed.js';
import React , {useRef , useEffect} from 'react';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [])
  

  return (
<main>

  <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
    <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
      <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
        A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"> <span ref={el} /></span>
      </h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
        Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
      </p>
    </div>
    <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
      <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
    </div>
  </section>

  {/* Premium Section */}
  <div className="flex flex-wrap justify-center mt-8 space-x-4">
  {/* Plan 1 */}
  <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic Plan</h3>
    <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
    <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300">
      <li>Access to all components</li>
      <li>Regular updates</li>
      <li>Email support</li>
    </ul>
    <button className="w-full px-4 py-2 mt-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
  </div>
  {/* Plan 2 */}
  <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Pro Plan</h3>
    <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
    <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300">
      <li>Everything in Basic</li>
      <li>Priority support</li>
      <li>Access to premium components</li>
    </ul>
    <button className="w-full px-4 py-2 mt-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
  </div>
  {/* Plan 3 */}
  <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Enterprise Plan</h3>
    <p className="mt-4 text-gray-500 dark:text-gray-300">$100/month</p>
    <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-300">
      <li>Everything in Pro</li>
      <li>Dedicated support</li>
      <li>Custom components</li>
    </ul>
    <button className="w-full px-4 py-2 mt-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Choose Plan</button>
  </div>
</div>

  {/*   Features Section */}
  <section className="container px-4 py-10 mx-auto mt-10">
    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">Our Features</h2>
    <p className="mt-4 text-lg text-center text-gray-500 dark:text-gray-300">Discover the amazing features we offer</p>
    <div className="flex flex-wrap justify-center mt-8 space-x-4">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Feature One</h3>
        <p className="mt-4 text-gray-500 dark:text-gray-300">Description of feature one.</p>
      </div>
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Feature Two</h3>
        <p className="mt-4 text-gray-500 dark:text-gray-300">Description of feature two.</p>
      </div>
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Feature Three</h3>
        <p className="mt-4 text-gray-500 dark:text-gray-300">Description of feature three.</p>
      </div>
    </div>
</section>
{/* Blogs  */}

<Blogs/>
</main>
  );
}