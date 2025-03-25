import Link from 'next/link';

export default function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link href='/about'> <button className="bg-green-500 px-4 py-2 text-white">Go to About</button></Link>
        </div>
    )
}