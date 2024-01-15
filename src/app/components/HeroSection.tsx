export default function HeroSection() {
  return (
    <section className="relative">

      <div className="container flex flex-col items-center space-y-5">
        {/* title */}
        <h1 className="w-full text-3xl font-extrabold leading-[45px] sm:max-w-xl md:max-w-2xl lg:max-w-[713px] lg:text-5xl lg:leading-[72px]">
          دومین همایش <span className="text-orange-500">فرانت‌اند</span> ایران{' '}
          <span className="text-green-500">اسفند ۱۴۰۲</span> در فریدون‌کنار،
          مازندران
        </h1>
        {/* description */}
        <h2 className="w-full font-light text-lg lg:text-2xl lg:leading-9 text-zinc-400 sm:max-w-xl md:max-w-2xl lg:max-w-[713px]">
          همایش فرانت چپتر محلی برای گردهمایی و به اشتراک‌گذاری تجربیات
          برنامه‌نویسان، متخصصین و علاقه‌مندان حوزه فرانت‌اند
        </h2>
        {/* detail */}
        <div className="grid w-full grid-cols-2 sm:max-w-xl md:flex md:max-w-2xl md:gap-10 lg:max-w-[713px]">
          {[
            {
              title: 'زمان',
              description: '۱۰ اسفند ۱۴۰۲',
            },
            {
              title: 'سخنرانان',
              description: '۱۸ نفر',
            },
            {
              title: 'شهر',
              description: 'فریدون‌کنار، مازندران',
            },
            {
              title: 'مکان',
              description: 'مجتمع تفریحی رجایی',
            },
          ].map((item, index) => {
            return (
              <div key={index} className="">
                <p className="text-sm font-light text-zinc-50">{item.title}</p>
                <p className="text-orange-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
