import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="relative h-[700px] top-8 flex items-center justify-center text-center bg-cover bg-center "
      style={{
        backgroundImage: `url(${banner})`,
        opacity: 0.9,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <h1 className="text-3xl md:text-5xl font-bold text-white z-10">
        Eternal Bonds: A Modern Matrimony Platform for Meaningful Connections
        and Lifelong Commitments
      </h1>
      <p className="absolute bottom-5 text-lg md:text-xl text-white z-10">
        Find Your Soulmate Here - Where Hearts Connect and Dreams Begin
      </p>
    </div>
  );
};

export default Banner;
