function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://e0.pxfuel.com/wallpapers/268/253/desktop-wallpaper-the-avengers-awesome-avengers-marvel-the-avengers-2012.jpg)`,
      }}
    >
      <div className="text-xl text-white text-center p-3 bg-gray-900/60 w-full">
        Avenger
      </div>
    </div>
  );
}
export default Banner;
