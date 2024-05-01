'use client'
import Image from "next/image";
import Script from "next/script";
import '@/assets/css/open-iconic-bootstrap.min.css'
import '@/assets/css/animate.css'
import '@/assets/css/owl.carousel.min.css'
import '@/assets/css/owl.theme.default.min.css'
import '@/assets/css/magnific-popup.css'
import '@/assets/css/aos.css'
import '@/assets/css/ionicons.min.css'
// import '@/assets/css/bootstrap-datepicker.css'
// import '@/assets/css/jquery.timepicker.css'
import '@/assets/css/flaticon.css'
// import '@/assets/css/style.css'
// import '@/assets/css/main.css'
import Link from "next/link";
import icon from '@/assets/images/dessert-2.jpg'
import person from '@/assets/images/person_5.jpg'
import { useEffect, useState } from "react";




export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 135) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=DM+Serif+Display" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet" />


      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />


      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery-migrate-3.0.1.min.js" strategy="beforeInteractive" />
      {/* <Script src="/js/popper.min.js" strategy="lazyOnload" /> */}
      {/* <Script src="/js/bootstrap.min.js" strategy="lazyOnload" /> */}
      <Script src="/js/jquery.easing.1.3.js" strategy="lazyOnload" />
      <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.stellar.min.js" strategy="lazyOnload" />
      <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/js/aos.js" strategy="lazyOnload" />
      {/* <Script src="/js/jquery.animateNumber.min.js" strategy="lazyOnload" /> */}
      <Script src="/js/bootstrap-datepicker.js" strategy="lazyOnload" />
      <Script src="/js/jquery.timepicker.min.js" strategy="lazyOnload" />
      <Script src="/js/scrollax.min.js" strategy="lazyOnload" />
      {/* <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false" strategy="lazyOnload" /> */}
      {/* <Script src="/js/google-map.js" strategy="lazyOnload" /> */}
      <Script src="/js/main.js" strategy="lazyOnload" />
      <main>
        {/* header */}

        <div className={`nav-scroll bg-[#181D24] ${scrolled ? 'sticky top-0 z-30 transition duration-1000 ease-in-out' : 'hidden'}`}>
          <div className="container mx-auto py-8">
            <nav className="flex justify-between items-center">
              <div className="flex gap-10 items-center">
                <button className="menu-header text-lineWhite text-[1.2rem]"><i className="fa fa-bars mr-2"></i>Menu</button>
                <Link className="text-lineWhite text-[1.2rem]" href={'/'}>Contact</Link>
              </div>

              <div>
                <Image alt="" width={200} height={200} src={'/next.svg'} />
              </div>
              <div className="flex gap-10 items-center">
                <div className="text-lineWhite text-[1.2rem]">0909210398</div>
                <div className="text-lineWhite dropdown-header text-[1.2rem]">Dropdown <i className="fa fa-angle-down ml-2"></i></div>
                <div>
                  <i className="fa fa-heart text-lineWhite"></i>
                </div>
              </div>

            </nav>
          </div>
        </div>

        <header className="h-lvh bg-banner flex flex-col justify-between">
          <div className="container mx-auto pb-10 pt-20">
            <nav className="flex justify-between items-center">
              <div className="flex gap-10 items-center">
                <button className="menu-header text-lineWhite text-[1.2rem]"><i className="fa fa-bars mr-2"></i>Menu</button>
                <Link className="text-lineWhite text-[1.2rem]" href={'/'}>Contact</Link>
              </div>

              <div>
                <Image alt="" width={200} height={200} src={'/next.svg'} />
              </div>
              <div className="flex gap-10 items-center">
                <div className="text-lineWhite text-[1.2rem]">0909210398</div>
                <div className="text-lineWhite dropdown-header text-[1.2rem]">Dropdown <i className="fa fa-angle-down ml-2"></i></div>
                <div>
                  <i className="fa fa-heart text-lineWhite"></i>
                </div>
              </div>

            </nav>
          </div>
          <div className="container mx-auto relative">
            <div className=" absolute -bottom-[90px]  text-banner text-[16rem] leading-[16rem]">
              <span className="text-lineWhite">VICTORY</span> <br />
              <span className="text-lineWhite">PARK</span>
              <span className="-ml-[10rem] text-[11rem] text-orange" style={{ fontFamily: 'Dancing Script', fontWeight: '200' }}> <i>Residences</i></span>
            </div>
            <div className="absolute right-0 -bottom-[30px]">
              <div className="flex gap-3 bg-white rounded-full py-4 px-5 items-center">
                <div className="w-[5rem] h-[5rem] ">
                  <Image alt="" src={icon} className="w-full h-full rounded-full" />
                </div>
                <div className="text-[1.2rem] ">
                  <span className="text-orange">элитные резиденции </span> <br />
                  <span>Tel: 0909210398</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className=" py-[20rem]">
          <div className="grid grid-cols-2">
            <div></div>
            <div>
              <div>
                <h2 className="text-orange text-[2.3rem]">ELITE FAMILY </h2>
                <h2 className="text-orange text-[2.3rem]">
                  RESIDENCES WITH RICH
                </h2>
                <h2 className="text-orange text-[2.3rem]">
                  INFRASTRUCTURE IN <span className="text-lineWhite">1 MINUTE</span>
                </h2>
                <h2 className="text-orange text-[2.3rem]">
                  FROM VICTORY PARK
                </h2>
              </div>
              <div className="mt-[8rem]">
                <span className="text-lineWhite">APARTMENTS FROM 64 TO 573 M2 <br />
                  WITH CLOSED AREA,<br />
                  TERRACES AND PATIOS IN ONE OF THE BEST PLACES <br />
                  TO LIVE IN MOSCOW.</span>
              </div>

            </div>
          </div>
        </div>

        {/* carousel */}
        <section className=" relative ">
          <div className="home_slider1 owl-carousel">
            <div className="slider-item h-[450px] " data-merge="1" style={{ background: 'url(images/banner2.jpg)' }}></div>
            <div className="slider-item h-[450px] " data-merge="2" style={{ background: 'url(images/banner.jpg)' }}> </div>
            <div className="slider-item h-[450px] " data-merge="2" style={{ background: 'url(images/banner.jpg)' }}></div>
            <div className="slider-item h-[450px] " data-merge="1" style={{ background: 'url(images/banner2.jpg)' }}></div>
            <div className="slider-item h-[450px] " data-merge="2" style={{ background: 'url(images/banner.jpg)' }}></div>
          </div>
          <div className="absolute z-10  top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
            <h2 className="text-lineWhite text-[13rem] font-DS"  ><i>Lorem ipsum. </i></h2>
          </div>
          <div className="absolute z-10 -bottom-[7rem] left-[50%] -translate-x-1/2">
            <button className="btn-view-more text-[1.2rem] text-lineWhite uppercase">View More</button>
          </div>
        </section>

        <section className="text-intro pt-[20rem] py-[30rem]">
          <div className="text-center">
            <h2 className="font-DM text-[6rem] text-lineWhite">LIFE</h2>
            <h2 className="font-DM text-[6rem] text-orange">SURROUNDED BY PARKS</h2>
            <h2 className="font-DM text-[6rem] text-orange">AND ICONIC PLACES <span className="text-lineWhite">OF MOSCOW</span></h2>
            <button className="btn-come-width text-[1.2rem] uppercase mt-16">Lorem, ipsum dolor.</button>
          </div>
        </section>

        <section className="bg-[#F9F0EC]">
          <div className="intro-2 h-[700px] relative">
            <div className="flex w-2/5 mx-auto justify-center h-full items-center" >
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-1"><h2 className=" text-[6rem] font-DM text-lineWhite">PARK</h2><h2 className="text-[6rem] text-lineWhite leading-7 font-DM">VICTORIES</h2> </div>
                <div className="col-span-1"> </div>
                <div className="col-span-1">  </div>
                <div className="col-span-1"><h5 className="text-lineWhite text-[1.2rem] mt-28">ОДИН ИЗ КРУПНЕЙШИХ МИРОВЫХ МЕМОРИАЛЬНЫХ КОМПЛЕКСОВ. ИДЕАЛЬНОЕ МЕСТО ДЛЯ ПРОГУЛОК И АКТИВНОГО ОТДЫХА С СЕМЬЕЙ.</h5> </div>

              </div>
            </div>
            <div className="absolute top-0 left-[50%] -translate-x-1/2">
              <h2 className="leading-[0px] font-DM text-[18rem] text-center text-orange  ">
                PLACES
              </h2>
              <h5 className="leading-[0px] text-[12rem] text-center text-lineWhite" style={{ fontFamily: 'Dancing Script', fontWeight: '200' }}><i>Loremipsum.</i></h5>
            </div>
            <div className="border absolute -bottom-[4rem] left-[28%] intro-2-one bg-white h-[160px] w-[160px] rounded-full flex justify-center items-center text-orange ">
              <div>
                <h2 className='text-[5rem] text-center leading-[4rem] font-DM'>1</h2>
                <span className='text-[1.2rem] text-center uppercase'>lorem</span>
              </div>
            </div>
            <div className="border absolute bottom-0 right-[40%] intro-2-one bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center text-orange text-[5rem]">
              <Image alt="" src={icon} className="w-full h-full rounded-full" />
            </div>
            <div className="border absolute bottom-0 right-[27%] intro-2-one bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center text-orange text-[5rem]">
              <Image alt="" src={icon} className="w-full h-full rounded-full" />
            </div>

          </div>
        </section>

        <section className="pt-20 bg-[#F9F0EC]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 items-center">
              <div className="col-span-1 text-center">
                <button className="px-10 py-5 rounded-[20px] text-lineWhite bg-[#59413E] uppercase">Lorem ipsum dolor adipisicing sit.</button>
              </div>
              <div className="col-span-1">
                <h2 className="text-[6rem] leading-[6rem] font-DM uppercase">
                  В <span className="text-orange">VICTORY PARK <br /> RESIDENCES</span> <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing test
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F0EC]">
          <div className="grid grid-cols-2 items-stretch">
            <div className="col-span-1 h-full">
              <div className="home_slider2 owl-carousel">
                <div className="slider-item h-lvh flex justify-end items-end p-[6rem]" style={{ background: 'url(images/banner.jpg)', backgroundSize: 'cover' }}>
                  <div className="">
                    <h1 className="font-DM text-lineWhite text-[7rem]">01</h1>
                    <span className="ml-[12rem] text-lineWhite text-[1.2rem]">/01</span>
                  </div>
                </div>
                <div className="slider-item h-lvh flex justify-end items-end p-[6rem]" style={{ background: 'url(images/banner.jpg)', backgroundSize: 'cover' }}>
                  <div className="">
                    <h1 className="font-DM text-lineWhite text-[7rem]">02</h1>
                    <span className="ml-[12rem] text-lineWhite text-[1.2rem]">/02</span>
                  </div>
                </div><div className="slider-item h-lvh flex justify-end items-end p-[6rem]" style={{ background: 'url(images/banner.jpg)', backgroundSize: 'cover' }}>
                  <div className="">
                    <h1 className="font-DM text-lineWhite text-[7rem]">03</h1>
                    <span className="ml-[12rem] text-lineWhite text-[1.2rem]">/03</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full p-[10rem]">
              <div className="flex flex-col h-full justify-between">
                <h2 className="text-orange text-[8rem] leading-[7rem] font-DS"><i>Victory <br /> <span className="ml-[15rem]">Garden</span></i></h2>
                <div className="">
                  <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum aperiam similique sequi odio excepturi? Possimus, quas ratione consequatur mollitia nesciunt laborum aliquam, laboriosam iusto error, perferendis ad id blanditiis.</p>
                  <div className="mt-20 text-[4rem] flex gap-10" >
                    <button className="text-[2rem] w-[60px] h-[60px] border border-[#AC835E] flex justify-center items-center rounded-full"><i className="fa fa-arrow-left"></i></button>
                    <button className="text-[2rem] w-[60px] h-[60px] border border-[#AC835E] flex justify-center items-center rounded-full"><i className="fa fa-arrow-right"></i></button>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="intro-3">
          <div className="container py-[15rem] mx-auto">
            <h2 className="text-lineWhite text-[6rem] leading-[7.5rem] font-DM"><span className="text-orange">ЖК VICTORY PARK <br />
              RESIDENCES </span> — ЗДЕСЬ <br />
              НАЧИНАЕТСЯ СВОБОДА</h2>
            <p className="w-1/3 uppercase mt-28 text-lineWhite leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda voluptas necessitatibus quam officiis recusandae, et exercitationem perspiciatis illum officia tempore eaque? Minus consequuntur officiis nisi, inventore a facilis modi ipsam ipsa fugiat ab possimus, iusto labore voluptatibus repellendus optio.
            </p>
            <button className="btn-come-width text-[1.2rem] uppercase mt-16">Lorem, ipsum dolor.</button>
          </div>
        </section>

        <section className="intro-4 bg-[#52403C] pt-[15rem] pb-[20rem]">
          <div className=" relative">
            <div className="home_slider3 owl-carousel">
              <div className="slider-item h-[500px] " style={{ background: 'url(images/banner6.jpg)' }}></div>
              <div className="slider-item h-[500px] " style={{ background: 'url(images/banner7.jpg)' }}> </div>
              <div className="slider-item h-[500px] " style={{ background: 'url(images/banner8.jpg)' }}></div>
              <div className="slider-item h-[500px] " style={{ background: 'url(images/banner7.jpg)' }}></div>
              <div className="slider-item h-[500px] " style={{ background: 'url(images/banner6.jpg)' }}></div>
            </div>
            <div className="absolute text-center z-10  top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <h2 className="font-DS text-[7rem] leading-6"><i>Lorem ipsum sit.</i></h2>
              <h2 className="text-lineWhite text-[10rem] font-DM uppercase"  >Lorem ipsum.  </h2>
            </div>
            <div className="absolute z-10 -bottom-[7rem] left-[50%] -translate-x-1/2">
              <button className="btn-view-more text-[1.2rem] text-lineWhite uppercase">View More</button>
            </div>
          </div>
        </section>

        <section className="container mx-auto relative py-[20rem] -z-[1]">
          <div className="text-[8rem]  absolute z-[1] top-0">
            <h2 className="leading-[14rem] font-DM text-lineWhite" >PARK</h2>
            <h2 className="leading-[4rem] font-DM text-orange">NEW PLACES</h2>
            <h2 className="text-orange font-DM">FOR LIFE US</h2>
          </div>
          <div className="grid grid-cols-3 items-end">
            <div className="col-span-1">

            </div>
            <div className="col-span-1 relative">
              <Image alt="" src={person} className="w-full h-[400px]" />
              <div className="absolute z-10 -bottom-[7rem] left-[50%] -translate-x-1/2">
                <button className="btn-view-more text-[3rem] text-orange  uppercase"><i className="fab fa-google-play"></i></button>
              </div>
            </div>
            <div className="col-span-1">
              <p className="uppercase text-[1.2rem] text-lineWhite pl-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum ducimus nam quia, magnam consectetur id amet quidem? Unde, quos? Pariatur, consequatur laborum? Iste enim ab voluptate, veritatis tenetur dolorem.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#F9F0EC] py-[15rem]">
          <section className="container section-category mx-auto ">
            <div className="grid grid-cols-3 gap-20">
              <div className="col-span-1 relative">
                <div className="rotate-[270deg] z-20 font-DM absolute right-[20%] bottom-[50%] text-[#59413E]">
                  <h2 className="text-[5rem] leading-9 ml-28 uppercase">Loremipsum.</h2>
                  <h2 className="text-[5rem]  uppercase">dolorsit.</h2>
                </div>
                <div className="absolute bottom-0 z-10 left-[50%] -translate-x-1/2">
                  <button style={{ background: '#F9F0EC' }} className="btn-view-more text-[3rem] text-orange uppercase"><i className="fa fa-arrow-right"></i></button>
                </div>

              </div>
              <div className="col-span-1 category1">
                <div className="p-20 border border-[#AC835E] ">
                  <div className="text-orange text-[1.2rem]">PARK</div>
                  <div className="uppercase text-[1.2rem] mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio pariatur esse sit quis. Delectus quasi veritatis dignissimos magni velit.</div>
                  <div className="flex leading-[1] text-orange justify-between mt-[15rem] items-end">
                    <h2 className="text-[7rem] font-DM leading-0">03</h2>
                    <p className="text-[1.2rem]">BLOCK</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 category2" style={{ background: 'url(images/banner.jpg)', backgroundSize: 'cover' }}>
                <div className="p-20 ">
                  <div className="text-lineWhite text-[1.2rem]">PARK</div>
                  <div className="uppercase text-lineWhite text-[1.2rem] mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio pariatur esse sit quis. Delectus quasi veritatis dignissimos magni velit.</div>
                  <div className="flex leading-[1] text-lineWhite justify-between mt-[15rem] items-end">
                    <h2 className="text-[7rem] font-DM leading-0">14</h2>
                    <p className="text-[1.2rem]">BLOCK</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="py-[30rem] relative" style={{ background: 'url(images/banner6.jpg)', backgroundSize: 'cover' }}>
          <div className="container mx-auto relative">
            <div className="grid grid-cols-3 gap-20">
              <div className="col-span-1 flex flex-col h-[400px] justify-between bg-[#181D24] p-20">
                <h2 className="text-[6rem] leading-9 font-DM text-orange">425</h2>
                <div className="flex gap-10 items-center">
                  <button className="text-[2.5rem] w-[35px] h-[35px] border border-[#AC835E] flex justify-center items-center rounded-full text-lineWhite">+</button>
                  <h2 className="text-lineWhite text-[1rem] uppercase">
                    <span>Lorem, ipsum.</span> <br />
                    <span>Lorem, ipsum dolor.</span>
                  </h2>
                </div>
              </div>
              <div className="col-span-1 flex flex-col h-[400px] justify-between bg-[#181D24] p-20">
                <h2 className="text-[6rem] leading-9 font-DM text-orange">425</h2>
                <div className="flex gap-10 items-center">
                  <button className="text-[2.5rem] w-[35px] h-[35px] border border-[#AC835E] flex justify-center items-center rounded-full text-lineWhite">+</button>
                  <h2 className="text-lineWhite text-[1rem] uppercase">
                    <span>Lorem, ipsum.</span> <br />
                    <span>Lorem, ipsum dolor.</span>
                  </h2>
                </div>
              </div>
              <div className="col-span-1 flex flex-col h-[400px] justify-between bg-[#181D24] p-20">
                <h2 className="text-[6rem] leading-9 font-DM text-orange">425</h2>
                <div className="flex gap-10 items-center">
                  <button className="text-[2.5rem] w-[35px] h-[35px] border border-[#AC835E] flex justify-center items-center rounded-full text-lineWhite">+</button>
                  <h2 className="text-lineWhite text-[1rem] uppercase">
                    <span>Lorem, ipsum.</span> <br />
                    <span>Lorem, ipsum dolor.</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="absolute text-center z-10 w-full top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
              <h2 className="text-orange text-[15rem] font-DS"  ><i>Lorem ipsum.</i>  </h2>
            </div>

          </div>
          <div className="absolute z-10 bottom-[10%] left-[50%] -translate-x-1/2">
            <button className="btn-view-more text-[1.2rem] text-lineWhite uppercase">View More</button>
          </div>
        </section>

        {/* contact */}
        <section className="bg-[#F9F0EC] py-[15rem]">
          <div className="container mx-auto">
            <div className="grid grid-cols-3">
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <h2 className="text-orange text-[4rem] leading-3 font-DM">
                  CONTACT WITH US
                </h2>
                <p className="text-[4rem] text-center font-DS">Lorem, ipsum.</p>
                <form className="form-contact  mt-20">
                  <div className="mb-16">
                    <input placeholder="Full name" />
                  </div>
                  <div className="mb-12">
                    <textarea placeholder="Message" />
                  </div>
                  <div className="flex gap-5 items-center text-[1.2rem]">
                    <i className="fa fa-check-circle text-orange text-[2.25rem]"></i>
                    <p className="uppercase text-[#877C79]">I agree with the developer's policy</p>
                  </div>
                  <div className="text-center w-100">
                    <button className="submit w-[80px] h-[80px] bg-[#AC835E] rounded-full text-[2.5rem] mt-16 text-lineWhite">
                      <i className="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="py-20">
          <div className="container mx-auto">
            <div className="border-b-[1px] border-[#AC835E] pb-20">
              <div className="flex justify-between">
                <div className="flex gap-6 items-center ml-6">
                  <button className="text-[0.75rem] w-[30px] h-[30px] border border-[#AC835E] flex justify-center items-center rounded-full text-orange">PDF</button>
                  <h2 className="text-lineWhite text-[1rem] uppercase">
                    <span>Lorem, ipsum.  </span>
                  </h2>
                </div>
                <div className="flex gap-6 items-center">
                  <h2 className="text-lineWhite text-[1rem] uppercase">
                    <span>Lorem, ipsum.</span>
                  </h2>
                  <button className="text-[0.75rem] w-[30px] h-[30px] border border-[#AC835E] flex justify-center items-center rounded-full text-orange">
                    <i className="fa fa-arrow-up"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-[10rem] flex flex-col justify-center items-center">
              <Image alt="" width={200} height={200} src={'/next.svg'} />
              <div className="mt-7 font-extralight text-orange text-[8rem] font-DM">0909210398</div>
              <div className="text-[#71677a] uppercase mt-5">Lorem, ipsum dolor.</div>
              <div className="text-[#71677a] uppercase">Lorem, ipsum dolor test.</div>
              <div className="text-lineWhite uppercase mt-5">Lorem, ipsum dolor test.</div>
              <div className="text-lineWhite uppercase">Lorem, ipsum.</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[#71677a] uppercase">Lorem, ipsum dolor.</div>
                <div className="text-lineWhite uppercase">Lorem, ipsum dolor test.</div>
              </div>
              <h2 className="font-DS text-[3rem] text-orange">Develop Software</h2>
              <div className="flex gap-6 items-center">
                <div>
                  <div className="text-[#71677a] uppercase">Lorem, ipsum dolor.</div>
                  <div className="text-lineWhite uppercase">Lorem, ipsum dolor test.</div>
                </div>
                <button className="text-[0.75rem] w-[30px] h-[30px] border border-[#AC835E] flex justify-center items-center rounded-full text-orange">
                  VI
                </button>
              </div>
            </div>
          </div>
        </footer>

      </main >
    </>
  );
}
