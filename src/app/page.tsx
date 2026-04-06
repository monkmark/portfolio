import Image from 'next/image';


export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-x-scroll hide-scrollbar bg-orange-100"> 
      <header className="flex w-screen h-auto relative text-base border-b-1 border-black animate-load-border p-1">
        <section className="banner w-1/2 h-auto flex items-center relative left-1 p-1">
          <p className="relative fadeInanimate">Marcus Parchman</p>
        </section>
        <section className='banner w-1/2 h-auto flex p-1'>
          <ul className="relative w-full h-auto font-Geist fadeInanimate flex justify-around items-center">
            <li className="item no-underline animate-bounce"><a className="text-black font-Geist-Mono hover:text-lg  transition-all duration-100 ease-out" href="https://github.com/monkmark" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li className="item no-underline animate-bounce2"><a className="text-black hover:text-lg transition-all duration-200 ease-in-out" href="https://www.linkedin.com/in/parchmanmarcus/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li className="item no-underline animate-bounce3"><a className="text-black hover:text-lg transition-all duration-200 ease-in-out" href="resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li className="item no-underline animate-bounce4"><a className="text-black hover:text-lg transition-all duration-200 ease-in-out" href="#footer">Contact</a></li>
          </ul>
        </section>
      </header>
      <main className="w-screen h-screen flex">
        <section className="leftbx relative w-[50vw] h-screen">
          <section className='container1 relative w-[50vw] h-auto'>
              <section className='relative w-[50vw] h-auto p-2'>
                <p className="mquerytext relative fadeInanimate2">Hi, I&#39;m Marcus</p>
                <p className="mquerytext2 relative fadeInanimate2">I&#39;m a Software Engineer major at Western Governors University</p>
                <p className='mquerytext2 relative fadeInanimate2'>I Specialize in Design & Developing software systems & products. Anywhere from fullstack web platforms to object-oriented applications. Feel free to check out my work alongside!</p>
              </section>
          </section>
          <section className="container2 relative w-[50vw] h-auto">
            <section className='relative w-[50vw] h-auto left-4'>
                <p className="mquerytext5 relative text-center fadeInanimate3">Main Technologies</p>
                <section className="flex relative justify-around text-center border-blue-700 border-1 rounded-xl w-[50vw] h-[18vh] bg-white right-3 fadeInanimate3">
                  <div className='w-auto h-[15vh] flex relative'>
                    <Image src="/techicons/mongodb.svg" alt="desc" width={100} height={0} className='relative'/>
                  </div>
                  <div className='w-auto h-[10vh] flex relative'>
                    <Image src="/techicons/node.png" alt="desc" width={50} height={0} className='relative top-4'/>
                  </div>
                  <div className='w-auto h-[10vh] '>
                    <Image src="/techicons/next.png" alt="desc" width={100} height={0} className='relative left-2'/>
                  </div>
                  <div className='w-auto h-[10vh]'>
                    <Image src="/techicons/cplus.png" alt="desc" width={70} height={0} className='relative top-4'/>
                  </div>
                  <div className='w-auto h-[10vh]'>
                    <Image src="/techicons/WebGL.png" alt="desc" width={100} height={0} className='relative top-7.5'/>
                  </div>
                </section>
            </section>
            <section className='relative w-[50vw] h-auto '>
                <p className="mquerytext5 relative right-1 text-center fadeInanimate4">Primary Skills</p>
                <section className="flex relative justify-center text-center border-blue-700 border-1 rounded-xl w-[50vw] h-[25vh] bg-white left-1 fadeInanimate4">
                  <div className='w-[8vw] h-[8vh] grid relative top-2'>
                    <Image src="/skillicons/webd.png" alt="desc" width={100} height={0}/>
                    <label className='mquerytext4 text-lg/-10'>Fullstack Development</label>
                  </div>
                  <div className='w-[8vw] h-auto grid relative top-2'>
                    <Image src="/skillicons/oop.png" alt="desc" width={100} height={0}/>
                    <label className='mquerytext4'>Object-Oriented Programming</label>
                  </div>
                  <div className='w-[8vw] h-auto grid relative top-2 left-1.5'>
                    <Image src="/skillicons/audiodsp.png" alt="desc" className='relative top-4' width={100} height={0}/>
                    <label className='mquerytext4 relative'>Signal Processing</label>
                  </div>
                  <div className='w-[8vw] h-auto grid relative left-1.5'>
                    <Image src="/skillicons/rd.png" alt="desc" className='relative top-4' width={100} height={0}/>
                    <label className='mquerytext4 relative top-2'>Responsive Design</label>
                  </div>
                  <div className='w-[8vw] h-auto grid'>
                    <Image src="/skillicons/pd.png" alt="desc" className='relative top-1' width={100} height={0}/>
                    <label className='mquerytext4'>Product Development</label>
                  </div>
                  <div className='w-[8vw] h-auto grid'>
                    <Image src="/skillicons/customer.png" alt="desc" className='relative top-1' width={100} height={0}/>
                    <label className='mquerytext4'>Customer Service</label>
                  </div>
                </section>
                 <p className='mquerytext7 relative mt-auto top-4 left-2 fadeInanimate4'>For all inquiries, feel free to leave a message in the contact form below:</p>
            </section>
          </section>
        </section>
        <section className="rightbx relative w-[50vw] h-screen p-1 ">
          <section className="container1 relative w-[50vw] h-[50vh]">
            <div className="relative w-[50vw] h-auto">
              <p className="mquerytext5 relative text-center fadeInanimate4">Projects</p>
            </div>
            <section className="relative firstrow flex w-[50vw] h-[20vh] justify-around">
              <div className="relative text-center card w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate5">
                <div className="thumbnail relative flex justify-center w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/synth.png" alt="Kong" width={100} height={0} className='imgquery relative top-1/12'/>
                </div>
                <a className='mquerytext6 relative' href='#' target='_blank' rel="noopener noreferrer">Kong1 Synth</a>
              </div>
              <div className="relative text-center card w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate6">
                <div className="thumbnail relative flex justify-center w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/input.png" alt="user-entry" width={65} height={0} className='imgquery2 relative h-[10vh] top-1/6'/>
                </div>
                <a className='mquerytext6 relative' href='#' target='_blank' rel="noopener noreferrer">User-Input Client</a>
              </div>
            </section>
            <section className="relative secondrow flex w-[50vw] h-[20vh] justify-around top-3 ">
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate7">
                <div className="thumbnail relative flex justify-center thumbnail w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/arrow.jpg" alt="STEPPER" width={55} height={0} className='imgquery3 relative top-1/4 h-[8vh]'/>
                </div> 
                <a className='mquerytext6 relative' href='#' target='_blank' rel="noopener noreferrer">Stepper Mobile</a>
              </div>
              <div className=" card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate8">
                <div className="flex justify-around thumbnail relative w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/calculator.png" alt="calculator" width={50} height={0} className='relative top-1/12 w-[5vw] h-[10vh]'/>
                </div>
                <a className='mquerytext6 relative' href='#' target='_blank' rel="noopener noreferrer">Calculator.js</a>
              </div>
            </section>
          </section>
          <section className="container2 relative w-[50vw] h-[50vh]">
            <section className="relative thirdrow flex w-[50vw] h-[23vh] justify-around top-1.5">
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate9">
                <div className="flex justify-around thumbnail relative w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/vynil.png" alt="calculator" width={50} height={0} className='relative top-1/12 w-[5vw] h-[10vh]'/>
                </div>
                <a className='mquerytext6 relative' href='#' target='_blank' rel="noopener noreferrer">Samplr</a>
              </div>
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate10">
                <div className="flex justify-around thumbnail relative w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/stocks.png" alt="calculator" width={50} height={0} className='relative top-1/12 w-[5vw] h-[10vh]'/>
                </div>
                <a className='mquerytext6 relative' href='#' target='_blank' rel="noopener noreferrer">Invest.py</a>
              </div>
            </section>
            <section className="relative fourthrow flex w-[50vw] h-[23vh] justify-around">
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate5">
                <div className="thumbnail relative w-[21.8vw] h-[13vh] border-b-1"></div>
                <a className='mquerytext4 relative' href='#' target='_blank' rel="noopener noreferrer">Invest.py</a>
              </div>
              <div className="card relative text-center w-[22vw] h-[20vh] border-1 border-black rounded-2xl bg-white fadeInanimate6">
                <div className="flex justify-around thumbnail relative w-[21.8vw] h-[13vh] border-b-1">
                  <Image src="/projecticons/sun.png" alt="calculator" width={50} height={0} className='relative top-1/12 w-[5vw] h-[10vh]'/>
                </div>
                <a className='mquerytext4 relative' href='#' target='_blank' rel="noopener noreferrer">MyWeather</a>
              </div>
            </section>
          </section>
        </section>
      </main>
      <footer id='footer' className="relative w-screen h-screen">
        <form className="email p-3 email-card relative w-[50vw] h-auto top-1/4 left-1/4 border-10 border-gray-2xl grid border-inset bg-white">
          <label className="relative left-1/16 p-2">Name:</label>
          <input className="userinput_1 relative w-1/4 left-1/8 border-5" type="text" name="name" placeholder="Enter your name" required></input>
          <label className="relative left-1/16 p-2">E-mail:</label>
          <input className="userinput_1 relative w-1/4 left-1/8 border-5" type="email" name="email" placeholder="Enter your email" required></input>
          <label className="relative left-1/16 p-2">Subject:</label>
          <input className="userinput_1 relative w-1/4 left-1/8 border-5" type="text" name="subject" placeholder="Enter subject" required></input>
          <label className="relative left-1/16 p-2">Message:</label>
          <textarea className="userinput_1 relative left-1/8 bottom-1/16 w-[37.5vw] resize-none border-5" name="message" placeholder="Enter your message" ></textarea>
          <button type="submit" className=" userinput relative w-1/3 border-6 border-silver top-1/6 left-1/3 p-1">
            <label className=" ">Submit</label>    
          </button>
        </form>
      </footer>
    </div>
  );
}