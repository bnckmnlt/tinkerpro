"use client";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <main>
      <div className='container section-whitespace text-center'>
        <h1 className='leading-snug font-normal'>
          Empowering entrepreneurs through business{" "}
          <span className='bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 bg-clip-text text-transparent'>
            hardware
          </span>{" "}
          and{" "}
          <span className='bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 bg-clip-text text-transparent'>
            software
          </span>{" "}
          offerings
        </h1>
      </div>
      <div className='section-whitespace container'>
        <header className='flex flex-col items-center pb-4 text-center lg:pb-10'>
          <h2 className='border-none font-medium'>About TinkerPro</h2>
          <div className='rounded-full'>
            <hr className='h-1.5 w-16 rounded-full border-none bg-orange-500'></hr>
          </div>
        </header>
        <div className='mt-12 md:mx-12'>
          <div className='grid sm:grid-cols-2 gap-6 text-sentence'>
            <section className='space-y-6'>
              <p className='indent-8'>
                With a keen eye for the struggles of entrepreneurs trying to
                make ends meet in the midst of the pandemic, the founders of
                TinkerPro recognized the surge of new businesses popping up
                across the country. They knew that these entrepreneurs needed
                support to manage and grow their businesses, which is why
                TinkerPro developed affordable and reliable Point of Sale
                solutions.
              </p>
              <p>
                As word spread about their services, TinkerPro quickly scaled up
                to accommodate clients nationwide, and the team has been working
                tirelessly ever since to provide the best support possible.
              </p>
            </section>
            <section className='space-y-6'>
              <p>
                Today, TinkerPro continues to serve as a valuable partner to
                Filipino entrepreneurs, helping them to navigate the challenges
                of business ownership and scale their ventures. As the company
                looks towards the future, the team remains committed to
                expanding their services to other markets, in order to help
                entrepreneurs around the world achieve their dreams.
              </p>
              <p>
                TinkerPro is more than just a business; it&apos;s a testament to
                the power of entrepreneurship and the impact that a small group
                of passionate individuals can have on the world.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
