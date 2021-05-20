import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/dog.jpg"
          alt="Developer"
          width={300}
          height={300}
        />
      </div>

      <h1>Hello world</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        laboriosam ratione aut debitis inventore corporis iste provident
        molestiae molestias perferendis voluptatibus, tempore vitae. Illum vero
        iste corporis beatae et ex!
      </p>
    </section>
  );
}

export default Hero;
