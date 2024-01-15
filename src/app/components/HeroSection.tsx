export default function HeroSection() {
  return (
    <section>
      <div className="container flex flex-col items-center space-y-4">
        {/* title */}
        <h1 className="w-full max-w-2xl text-3xl font-extrabold leading-[45px]">
          دومین همایش <span className="text-orange-500">فرانت‌اند</span> ایران{' '}
          <span className="text-green-500">اسفند ۱۴۰۲</span> در فریدون‌کنار،
          مازندران
        </h1>
        {/* description */}
        <h2 className="w-full max-w-2xl text-lg text-zinc-400">
          همایش فرانت چپتر محلی برای گردهمایی و به اشتراک‌گذاری تجربیات
          برنامه‌نویسان، متخصصین و علاقه‌مندان حوزه فرانت‌اند
        </h2>
        {/* detail */}
        <div className="grid w-full max-w-2xl grid-cols-2">
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
                <p className="text-sm text-zinc-50">{item.title}</p>
                <p className="text-orange-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
