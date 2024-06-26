import Image from 'next/image';

const About = () => {
  return (
    <div className="my-[120px]">
      <div>
        <Image
          src="/assets/images/about_us/person.jpg"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div></div>
    </div>
  );
};

export default About;
