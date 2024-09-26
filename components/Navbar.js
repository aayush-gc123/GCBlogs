// components/Navbar.js
"use client"
import react , {useState , useEffect , useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import { ModeToggle } from './themeButton';
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const [Progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
      setProgress(30)
    
      setTimeout(() => {
        setProgress(70)
      }, 100);
      setTimeout(() => {
        setProgress(100)
      }, 800);
    }, [pathname])
    
    useEffect(() => {
    setTimeout(() => {
        setProgress(0)
    }, 900);
    }, [])
    
    return (
        <nav className=" p-4 bg-background/50 sticky top-0 border-b ">
            <LoadingBar
              color='#f11946'
              progress={Progress}
              onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex  items-center backdrop-blur justify-between">
                <div className="flex items-center ">
                    {/* <Image src="/logo.png" alt="GCBlogs Logo" width={40} height={40} /> */}
                   <Link href = {"/"}>
                   <span className=" text-lg font-bold ">GCBlogs</span>
                   </Link>
                </div>
             <div className="hidden md:flex items-center gap-12">
    <Link href="/" className="hover:underline hover:font-bold transition-all">
        Home
    </Link>
    <Link href="/about" className="hover:underline hover:font-bold transition-all">
        About
    </Link>
    <Link href="/blog" className="hover:underline hover:font-bold transition-all">
        Blog
    </Link>
    <Link href="/contact" className="hover:underline hover:font-bold transition-all">
        Contact
    </Link>
    
    <div className="flex items-center gap-4">
        <Button variant="outline">SignIn</Button>
        <Button variant="outline">SignUp</Button>
        <ModeToggle/>
    </div>
</div>
         <div className="md:hidden flex items-center">
    <Sheet>
  <SheetTrigger> Menu</SheetTrigger>
  <span className = "mx-2  ">
  <ModeToggle/>
  </span>
 
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
      <div className="   items-center flex flex-col gap-10 text-xl font-bold p-16">
                    <Link href="/">
                    Home
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                    <Link href="/contact">
                    Contact
                    </Link>
                    <div >
                <Button variant="outline">SignIn</Button>
                <Button variant="outline" className="m-3" >SignUp</Button>
                </div>
                </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

                  
                </div>
               
            </div>
        </nav>
    );
};

export default Navbar;
