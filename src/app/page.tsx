import Link from "next/link";
import Navbar from "./components/Navbar";
import './globals.css';
import BestSellerProducts from "./components/Products/BestSellerProducts";
import NewReleaseProducts from "./components/Products/NewReleaseProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <section className="hero-section z-0 bg-[url('/images/Artboard_2028_20_281_29.jpg')] bg-left-top bg-no-repeat bg-cover lg:h-[100vh] md:h-[80vh] h-[65vh] flex items-center justify-center">
        <div className="text-center lg:w-[600px] md:w-[500px] w-[90%] p-[35px] rounded-[15px] bg-[#14191e99] backdrop-blur-[20px] border-2 border-[#14191ebe]">
          <div className="texts flex flex-col lg:gap-5 md:gap-4 gap-3">
            <h2 className="font-black lg:text-[65px] md:text-[45px] text-[35px] lg:leading-[60px] md:leading-[40px] leading-[35px]">Fashion that Fits Your Life.</h2>
            <p className="lg:text-lg md:text-base text-sm">Stylish yet professional outfits suitable for various workplaces. </p>
            <div className="btns flex gap-[15px] m-auto">
              <button className="btn w-fit h-[40px] px-5 border border-white bg-transparent text-white rounded-[5px]">Shop Men</button>
              <button className="btn w-fit h-[40px] px-5 border border-white bg-transparent text-white rounded-[5px]">Shop Women</button>
            </div>
          </div>
        </div>
      </section>

      <section className="shop">
        <div className="container">
          <div className="flex items-center justify-between h-[75px] w-full">
            <h3 className="font-black lg:text-[35px] md:text-[30px] text-[20px]">Shop Best Sellers</h3>
            <div className="flex gap-[5px] lg:text-lg md:text-base text-sm">
              <Link href='' className="border-b-2 border-[#ffffff80] py-0 w-full px-2">Men</Link>
              <Link href='' className="border-b-2 border-[#ffffff80] py-0 w-full px-2">Women</Link>
            </div>
          </div>
          <div className="products py-5 border-y-2 border-[#ffffff1c]">
            <BestSellerProducts />
          </div>
          <div className="showcase grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 py-5">
            <div className="img relative w-full h-[450px] bg-[url(/images/double1.jpeg)] bg-cover bg-top">
                <div className="absolute bottom-[20px] left-[20px] font-bold text-xl text-white underline underline-offset-2">Men and Women Tops</div>
            </div>
            <div className="img relative w-full h-[450px] bg-[url(/images/single1.jpeg)] bg-cover bg-top">
                <div className="absolute bottom-[20px] left-[20px] font-bold text-xl text-white underline underline-offset-2">Men Tops</div>
            </div>
            <div className="img relative w-full h-[450px] bg-[url(/images/double2.jpeg)] bg-cover bg-top">
                <div className="absolute bottom-[20px] left-[20px] font-bold text-xl text-white underline underline-offset-2">Women Tops</div>
            </div>
            <div className="img relative w-full h-[450px] bg-[url(/images/double3.jpeg)] bg-cover bg-top">
                <div className="absolute bottom-[20px] left-[20px] font-bold text-xl text-white underline underline-offset-2">Men and Women Tops</div>
            </div>
          </div>
          <div className="flex items-center justify-between h-[75px] w-full">
            <h3 className="font-black lg:text-[35px] md:text-[30px] text-[20px]">Shop New Releases</h3>
            <div className="flex gap-[5px] lg:text-lg md:text-base text-sm">
              <Link href='' className="border-b-2 border-[#ffffff80] py-0 w-full px-2">Men</Link>
              <Link href='' className="border-b-2 border-[#ffffff80] py-0 w-full px-2">Women</Link>
            </div>
          </div>
          <div className="products py-5 border-y-2 border-[#ffffff1c]">
            <NewReleaseProducts />
          </div>
        </div>
      </section>


      <section className="voted py-[150px] bg-[url(/images/best-tees.webp)] bg-cover bg-top my-5">
        <div className="inner-text text-white lg:w-[65%] md:w-[75%] w-[85%] mx-auto flex flex-col gap-[10px]">
          <h2 className="lg:text-[40px] md:text-[35px] text-[25px] font-bold">VOTED THE BEST TEES ON EARTH</h2>
          <p className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vero provident ducimus, quasi reiciendis perferendis, aliquam suscipit delectus repellat inventore.</p>
          <button className="btn w-fit h-[40px] px-5 border border-white bg-transparent text-white rounded-[5px] mx-auto mt-[30px]">Shop Now</button>
        </div>
      </section>


      <section className="trending">
        <div className="container">
          <h3 className="font-black lg:text-[35px] md:text-[30px] text-[20px] py-[25px]">Trending Styles</h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
            <div className="trend-card lg:block md:block grid grid-cols-2 gap-5 items-center">
              <Image className="h-[auto] w-full rounded-5" src="/images/single1.jpeg" width={100} height={100}  alt="trending pictures" />
              <div className="all-contents flex flex-col gap-2 py-3">
                <div className="title font-bold text-lg">Mogul Jacket</div>
                <p className="description text-[13px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sunt? Molestias id blanditiis fuga illo?</p>
                <button className="btn w-fit h-[40px] px-[30px] border border-white bg-transparent text-white rounded-[5px]">Shop Now</button>
              </div>
            </div>
            <div className="trend-card">
              <Image className="h-[auto] w-full" src="/images/single1.jpeg" width={100} height={100}  alt="trending pictures" />
              <div className="all-contents flex flex-col gap-2 py-3">
                <div className="title">Mogul Jacket</div>
                <p className="description text-[13px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sunt? Molestias id blanditiis fuga illo?</p>
                <button className="btn w-fit h-[40px] px-[30px] border border-white bg-transparent text-white rounded-[5px]">Shop Now</button>
              </div>
            </div>
            <div className="trend-card">
              <Image className="h-[auto] w-full" src="/images/single1.jpeg" width={100} height={100}  alt="trending pictures" />
              <div className="all-contents flex flex-col gap-2 py-3">
                <div className="title">Mogul Jacket</div>
                <p className="description text-[13px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sunt? Molestias id blanditiis fuga illo?</p>
                <button className="btn w-fit h-[40px] px-[30px] border border-white bg-transparent text-white rounded-[5px]">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
