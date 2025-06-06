export const CipherWheel = () => (
  <div className="cipher-wheel fixed bottom-4 right-4 w-16 h-16 z-50">
    <img 
      src="https://static.wikia.nocookie.net/gravityfalls/images/5/51/Bill_Cipher.png" 
      alt="Cipher Wheel"
      className="animate-spin-slow hover:animate-pulse cursor-pointer"
    />
  </div>
);

export const HiddenMessages = () => (
  <div className="hidden-messages fixed top-0 left-0 w-full text-center text-xs opacity-0 hover:opacity-100 transition-opacity">
    <p className="bg-black/50 p-1">3-11-9-6-20-25-19-1-22-5-19-15-13-5-20-8-9-14-7</p>
  </div>
);
