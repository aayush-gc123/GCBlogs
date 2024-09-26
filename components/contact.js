import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="text-center mb-5">
        <img src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/286994765_431640028749360_4257453258864666131_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qYBFgJgv9iMQ7kNvgHt0WGK&_nc_ht=scontent-cph2-1.xx&_nc_gid=Akmog8x8weOwvxJpqDagdWl&oh=00_AYDrKwhFOKLLDUt__rTaZ65qLEJ-H0u2KYBLeei-63xrPg&oe=66FA0F3B" alt="Your Name" className="w-36 h-36 rounded-full mb-2" />
        <h1>Aayush GC</h1>
      </div>
      <div className="w-full max-w-lg animate-fadeIn">
        <form className="flex flex-col">
          <label htmlFor="name" className="mb-1">Name:</label>
          <input type="text" id="name" name="name" required className="mb-4 p-2 border border-gray-300 rounded" />
          
          <label htmlFor="email" className="mb-1">Email:</label>
          <input type="email" id="email" name="email" required className="mb-4 p-2 border border-gray-300 rounded" />
          
          <label htmlFor="message" className="mb-1">Message:</label>
          <textarea id="message" name="message" required className="mb-4 p-2 border border-gray-300 rounded"></textarea>
          
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
