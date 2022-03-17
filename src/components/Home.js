export default function Home() {
  return (
    <div>
      <div className="p-6 h-screen my-forest-bg grid md:grid-cols-3 grid-cols-4 grid-rows-3">
        <div className="font-body p-5 row-start-2 row-span-1 md:col-start-2 md:col-span-1 
        col-start-1 col-span-4 animate-ping-3 grid place-items-center text-center 
        my-sage-bg my-text-forest rounded-lg border-2 border-mustard shadow-lg">
          <p className="my-text-forest">Hi, I'm Patrick 👋</p>
          <p className="my-text-forest">I'm a full-stack developer, and I love learning new things.</p>
        </div>
      </div>
      <div className="h-screen my-sage-bg">

      </div>
      </div>
  );
}

//animate-bounce-3