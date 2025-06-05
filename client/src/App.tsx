import "./App.css";
import About from "./components/About.tsx";
import { Experience } from "./components/Experience.tsx";
import Footer from "./components/Footer.tsx";
import { Header } from './components/Header/Header.tsx'
import Projects from "./components/Projects.tsx";
import Writing from "./components/Writing.tsx";

function App() {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
      <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <Header />

        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Writing />
          <Footer />
        </main>
        <div className="absolute bottom-0 right-0">
          <button
            className="hover:text-teal-300 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R4l6:"
            data-state="closed"
          >
            <span className="sr-only">Click to time travel</span>
            <img
              alt="Spinning Tardis from Doctor Who"
              loading="lazy"
              width="100"
              height="86"
              decoding="async"
              src="/images/tardis/rotate.gif"
              srcSet="/images/tardis/rotate.gif 1x, /images/tardis/rotate.gif 2x"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;