import tictactoe from './assets/img/tictactoe.png'
export function Middle(){
    return( 
    <main>
        <div className='text-[#D0F0C0] text-lg m-2'>   
<nav className='flex justify-around items-center mb-2 mt-2'>
<img src={tictactoe} className='h-[80px] sm:h-[150px]'/> 
<img src={tictactoe} className='h-[80px] sm:h-[150px]'/> 
<img src={tictactoe} className='h-[80px] sm:h-[150px]'/> 
  </nav> 

      {/* About Section */}
      <section className="mb-4">
        <h2 className="text-lg sm:text-2xl font-bold text-[#EEEEEE] mb-2">About the Website:</h2>
        <p>
          Welcome to a unique hub of fun and functionality! This website is a carefully curated collection of
          interactive games and practical tools, designed to provide both entertainment and utility in a single platform.
          Whether you're here to challenge your mind or simplify your daily tasks, we have something for everyone.
        </p>
      </section>

      {/* Games Section */}
      <section className="mb-4">
        <h2 className="text-md sm:text-xl font-bold text-[#EEEEEE] mb-2">Games Section:</h2>
        <p>
          Rediscover the joy of timeless games such as Tic-Tac-Toe, where strategy meets simplicity, and Rock-Paper-Scissors,
          the ultimate test of chance and wit. These games are designed to offer a quick escape from the mundane, making
          every visit a delightful experience. We aim to continuously expand our game library, so stay tuned for new and
          exciting additions!
        </p>
      </section>

      {/* Tools Section */}
      <section className="mb-4">
        <h2 className="text-md sm:text-xl font-bold text-[#EEEEEE] mb-2">Tools Section:</h2>
        <p>
          On the practical side, this website offers a suite of tools to make your life easier. Calculate effortlessly with our
          calculator, keep track of your health with the BMI calculator, and explore other handy utilities designed to save you
          time and effort. Each tool is developed with precision and user convenience in mind, ensuring a seamless experience
          every time.
        </p>
      </section>

      {/* Why This Platform */}
      <section className="mb-4">
        <h2 className="text-md sm:text-xl font-bold text-[#EEEEEE] mb-2">Why This Platform?</h2>
        <p>
          In today’s fast-paced world, finding a blend of entertainment and practicality in one place can be a challenge. This
          platform bridges that gap by offering games to engage your mind and tools to support your daily tasks—all wrapped in
          a sleek, user-friendly interface. Whether you're here for leisure, productivity, or a mix of both, this website is your
          go-to destination.
        </p>
      </section>
        </div>
      </main>
      )
}